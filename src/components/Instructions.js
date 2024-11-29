import React from "react";
import Styles from '../styles/Instructions.module.css'
import InstructionsGrid from "./InstructionsGrid";


function Instructions() {
  return (
    <div className="instructionsBox">
      <h3>Instructions</h3>

      <p> ↑ Use the up arrow key to spin the boxes up</p>
      <p>← Use the left arrow key to spin the boxes left</p>
      <p>→ Use the right arrow key to move the selected box right</p>
      <p> ↓ Use the down arrow key to move the selected box down</p>
      <p>Press spacebar to undo your last move</p>
      <p>Press enter to stop/start the timer</p>

      <h3>How to win</h3>
      <p>
        Win by lining the colours up together either horizontally or vertically
        & each row and column must contain the numbers 1 - 4
      </p>
      <p>To be included in Highscores Board, timer must be open for new game</p>
      <InstructionsGrid className="instructionsGrid"/>
    </div>
  );
}

export default Instructions;
