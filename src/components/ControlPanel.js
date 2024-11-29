import React, { useState } from "react";
import Timer from "./Timer";
import styles from "../styles/ControlPanel.module.css";

function ControlPanel({ handleNewGame, handleInstructions, handleTimer, handleHighscoreBoard}) {
  const [instructions, setInstructions] = useState(false);
  const [game, setNewGame] = useState(false);
  const [timer, setTimer] = useState(false);

  function handleNewGameClick() {
    console.log("button is clicked in the control panel");
    handleNewGame();
  }

  function handleInstructionClick() {
    handleInstructions();
  }

  function handleTimerClick() {
    handleTimer();
    // setTimer(!timer);
  }
  function handleHighscoreBoardClick() {
    handleHighscoreBoard();
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlPanelContainer}>
        <button className={styles.newGameButton} onClick={handleNewGameClick}>
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
        <button className={styles.highscoresButton} onClick={handleHighscoreBoardClick}>
          Highscores Board
        </button>
      </div>
    </div>
  );
}
export default ControlPanel;
