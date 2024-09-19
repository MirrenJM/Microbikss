import React, { useState, useEffect } from "react";
import styles from "../styles/ControlPanel.module.css";
 import { useStoredState } from "../customHooks/useStoredState";

function Timer({ timer, newGame }) {
  const [time, setTime] = useStoredState(0, 'storeTime');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => setTime((prevtime) => prevtime + 1), 1000);
    }
    else{
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  useEffect(() => {
    if(newGame){
      setTime(() => 0);
    }
  },[newGame]);

  // const hours = Math.floor(time / 3600000);
  // const minutes = Math.floor((time % 3600000) / 60000);
  // const seconds = Math.floor((time % 60000) / 1000);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

  function handleStartTimerClick() {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
     
    }
  }

  function handlePauseResetClick() {
    setIsActive(false);
     setTime(() => 0);
  }

  return (
    <div className={styles.timerContainer}>
      {timer && (
        <button
          className={styles.startTimerButton}
          onClick={handleStartTimerClick}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      )}
      { timer && <button
        className={styles.pauseResetButton}
        onClick={handlePauseResetClick}
      >
        Reset
      </button>
      }
      {timer && <div className={styles.clockContainer}>
        <button className={styles.clockTime}>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </button>
      </div>
      }
    </div>
  );
}

export default Timer;
