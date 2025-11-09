import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className = "counter">
        <div>
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            Increment
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button
            onClick={() => {
              setCount((count) => count - 1);
            }}
          >
            Decrement
          </button>
        </div>
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
