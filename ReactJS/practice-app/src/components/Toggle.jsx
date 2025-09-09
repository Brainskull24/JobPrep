import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <h1>Toggle Component</h1>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
