// MessageInput.jsx
// Fixes: original index.html sent raw untrimmed input; there was also
// no disabled state, so users could spam-send while a reply was pending.

import { useState } from 'react';

export default function MessageInput({ onSend, disabled }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  }

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        className="input-bar__field"
        type="text"
        placeholder="Message the assistant…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        maxLength={1000}
      />
      <button className="input-bar__send" type="submit" disabled={disabled || !value.trim()}>
        Send
      </button>
    </form>
  );
}
