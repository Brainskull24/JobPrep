// import React, { useState } from "react";
// import { useStopwatch } from "./useStopwatch";

// const formatTime = (ms) => {
//   const totalSeconds = Math.floor(ms / 1000);
//   const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
//   const seconds = String(totalSeconds % 60).padStart(2, "0");
//   const millis = String(Math.floor((ms % 1000) / 100)).padStart(1, "0");
//   return `${minutes}:${seconds}.${millis}`;
// };

// const Stopwatch = () => {
//   const [laps, setLaps] = useState([]);
//   const [countdownMode, setCountdownMode] = useState(false);
//   const [inputSeconds, setInputSeconds] = useState(30);

//   const { time, isRunning, start, stop, reset } = useStopwatch({
//     countdown: countdownMode,
//     initialSeconds: inputSeconds,
//   });

//   const addLap = () => {
//     setLaps((prev) => [...prev, formatTime(time)]);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>⏱️ Advanced Stopwatch</h1>

//       {/* Toggle Countdown */}
//       <div style={styles.toggle}>
//         <label>
//           <input
//             type="checkbox"
//             checked={countdownMode}
//             onChange={() => setCountdownMode((prev) => !prev)}
//           />
//           Countdown Mode
//         </label>
//         {countdownMode && (
//           <input
//             type="number"
//             value={inputSeconds}
//             onChange={(e) => setInputSeconds(Number(e.target.value))}
//             style={styles.input}
//           />
//         )}
//       </div>

//       {/* Timer Display */}
//       <h2 style={styles.timer}>{formatTime(time)}</h2>

//       {/* Controls */}
//       <div style={styles.buttons}>
//         {!isRunning ? (
//           <button onClick={start} style={styles.btnStart}>
//             Start
//           </button>
//         ) : (
//           <button onClick={stop} style={styles.btnStop}>
//             Stop
//           </button>
//         )}
//         <button onClick={reset} style={styles.btnReset}>
//           Reset
//         </button>
//         <button onClick={addLap} style={styles.btnLap} disabled={!isRunning}>
//           Lap
//         </button>
//       </div>

//       {/* Laps */}
//       <ul style={styles.laps}>
//         {laps.map((lap, i) => (
//           <li key={i}>
//             Lap {i + 1}: {lap}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Stopwatch;

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "40px auto",
//     padding: "20px",
//     borderRadius: "12px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     background: "#f9f9f9",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   timer: { fontSize: "2.5rem", margin: "20px 0", color: "#007bff" },
//   buttons: { display: "flex", gap: "10px", justifyContent: "center" },
//   btnStart: { background: "#28a745", color: "#fff", padding: "8px 16px" },
//   btnStop: { background: "#dc3545", color: "#fff", padding: "8px 16px" },
//   btnReset: { background: "#6c757d", color: "#fff", padding: "8px 16px" },
//   btnLap: { background: "#17a2b8", color: "#fff", padding: "8px 16px" },
//   laps: { marginTop: "20px", textAlign: "left" },
//   toggle: { marginBottom: "15px" },
//   input: { marginLeft: "10px", width: "60px" },
// };


import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in ms
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // update every 10ms
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Format ms → mm:ss:ms
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div style={styles.buttons}>
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
};

export default Stopwatch;
