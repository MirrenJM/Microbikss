import React from "react";
import styles from '../styles/Grid.module.css';
import Box from './Box';

function Grid({boxContent, activeSquare, swishLeft, swishUp}){


return (
  <div className={styles.gameContainer}>
    <div className={styles.gridContainer}>
      {boxContent.map((row, i) => (
        <div key={i} className={styles.gridRow}>
          {row.map((col, j) => (
            <Box
              className={styles.gridItem}
              key={col.colour + col.value}
              value={col.value}
              colour={col.colour}
              selected={activeSquare[0] === i && activeSquare[1] === j}
              swishLeft={swishLeft.includes[(i, j)]}
              swishUp={swishUp.includes[(i, j)]}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);
}

export default Grid; 