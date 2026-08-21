// MessageBubble.jsx
// JSX text nodes ({content}) are automatically escaped by React —
// this is what fixes the innerHTML XSS issue found in the original
// script.js and index.html.

export default function MessageBubble({ role, content, timestamp }) {
  const isUser = role === 'user';

  const time = timestamp
    ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '';

  return (
    <div className={`bubble-row ${isUser ? 'bubble-row--user' : ''}`}>
      <div className={`bubble ${isUser ? 'bubble--user' : 'bubble--bot'}`}>
        <p className="bubble__text">{content}</p>
        {time && <span className="bubble__time">{time}</span>}
      </div>
    </div>
  );
}
