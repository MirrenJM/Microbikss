import React, { useState, useEffect } from "react";
import styles from "../styles/ControlPanel.module.css";

function Timer({ timer }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => setTime((prevtime) => prevtime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

    function handleStartTimerClick() {
      if (!isActive) {
        setIsActive(true);
      }
    }
    
    function handlePauseResetClick() {
      if (isActive) {
        setIsActive(false);
      } else {
        setTime((prevtime) => 0);
      }
    }
   
  return (
    <div className={styles.timerContainer}>
      {timer && (
        <button
          className={styles.startTimerButton}
          onClick={handleStartTimerClick}
        >
          Start
        </button>
      )}
      {timer && (
        <button
          className={styles.pauseResetButton}
          onClick={handlePauseResetClick}
        >
          {isActive ? "Pause" : "Reset"}
        </button>
      )}
      {timer && (
        <div className={styles.clockContainer}>
          <p className={styles.clockTime}>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
}

export default Timer;
