import { useState, useRef } from "react";

export function useStopwatch({ countdown = false, initialSeconds = 0 }) {
  const [time, setTime] = useState(countdown ? initialSeconds * 1000 : 0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return; // prevent multiple intervals
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (countdown) {
          if (prev <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 100;
        } else {
          return prev + 100;
        }
      });
    }, 100);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(countdown ? initialSeconds * 1000 : 0);
  };

  return { time, isRunning, start, stop, reset };
}
