import React, { useState, useEffect } from "react";

const InputField = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!text) {
      setTyping(false);
      return;
    }

    // Show "typing..."
    setTyping(true);

    // Hide it after 1 second of no typing
    const timer = setTimeout(() => {
      setTyping(false);
    }, 1000);

    // Cleanup: clear timer if user types again before timeout finishes
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={!text.trim()}>Button</button>
      {typing && <p>Typing...</p>}
    </div>
  );
};

export default InputField;
