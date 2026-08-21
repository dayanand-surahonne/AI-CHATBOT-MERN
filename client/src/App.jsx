// App.jsx
// Fixes: original script.js had no try/catch around the fetch's error
// path and never checked response.ok — errors from a misbehaving
// backend would silently render as if they were valid AI replies.
// This version explicitly handles 429 (rate limited), non-ok responses,
// and network failures with distinct, honest messages to the user.

import { useEffect, useState } from 'react';
import ChatWindow from './components/ChatWindow.jsx';
import MessageInput from './components/MessageInput.jsx';
import './App.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetch('/chat/history', { credentials: 'include' });
        if (!res.ok) return;
        const data = await res.json();
        setMessages(data.messages || []);
      } catch {
        // A fresh session with no history yet is expected — fail silently.
      }
    }
    loadHistory();
  }, []);

  async function handleSend(text) {
    setError(null);
    setMessages((prev) => [...prev, { role: 'user', content: text, timestamp: Date.now() }]);
    setIsTyping(true);

    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ message: text }),
      });

      if (res.status === 429) {
        setError("You're sending messages too quickly. Please wait a moment.");
        return;
      }
      if (!res.ok) {
        setError('Something went wrong. Please try again.');
        return;
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply, timestamp: Date.now() }]);
    } catch {
      setError('Could not reach the server. Check your connection.');
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__status-dot" />
          <h1 className="app__title">AI Chatbot</h1>
        </div>
        <span className="app__subtitle">MERN stack · powered by Gemini</span>
      </header>

      <main className="app__main">
        <ChatWindow messages={messages} isTyping={isTyping} />
      </main>

      {error && <div className="app__error">{error}</div>}

      <footer className="app__footer">
        <MessageInput onSend={handleSend} disabled={isTyping} />
      </footer>
    </div>
  );
}
