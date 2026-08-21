import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble.jsx';

export default function ChatWindow({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="chat-window">
      {messages.length === 0 && !isTyping && (
        <div className="chat-window__empty">
          <p>No messages yet. Say hello.</p>
        </div>
      )}

      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} content={msg.content} timestamp={msg.timestamp} />
      ))}

      {isTyping && (
        <div className="bubble-row">
          <div className="bubble bubble--bot bubble--typing">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
