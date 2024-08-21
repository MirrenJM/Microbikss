import React from "react";


function Instructions() {
  return (
    <div>
      <h3>Instructions</h3>

      <p> ↑ Use the up arrow key to spin the boxes up</p>
      <p>→ Use the right arrow key to spin the boxes right</p>
      <p>← Use the left arrow key to move the selected box left</p>
      <p> ↓ Use the down arrow key to move the selected box down</p>
      <p>Press spacebar to undo your last move</p>

      <h3>How to win</h3>
      <p>
        Win by lining the colours up together either horizontally or vertically
        & each row and column must contain the numbers 1 - 4
      </p>
    </div>
  );
}

export default Instructions;
