import React, { useState } from "react";
import Timer from "./Timer";
import styles from "../styles/ControlPanel.module.css";

function ControlPanel({newGame}) {
  const [instructions, setInstructions] = useState(false);
  const [game, setNewGame] = useState();
  const [timer, setTimer] = useState(false);

  function handleNewGameClick() {
    //newGame.handleNewGame();
  }

  function handleInstructionClick() {
    console.log("instructions click");
  }

  function handleTimerClick() {
    setTimer(!timer);
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlPanelContainer}>
        <button className={styles.newGameButton} onClick={newGame}>
          New Game
        </button>
        <button
          className={styles.instructionButton}
          onClick={handleInstructionClick}
        >
          Instructions
        </button>
        <button className={styles.timerButton} onClick={handleTimerClick}>
          Timer
        </button>
      </div>

      <Timer timer={timer} />
    </div>
  );
}
export default ControlPanel;
