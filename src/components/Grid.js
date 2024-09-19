import React from "react";
import styles from '../styles/Grid.module.css';
import Box from './Box';

function Grid({boxContent, activeSquare, style, rowCount}){
const root = document.querySelector(":root");
            root.style.setProperty("--pseudo-text-row", `"${boxContent[3][activeSquare[1]].value}"`);
            root.style.setProperty("--pseudo-text-col", `"${boxContent[activeSquare[0]][3].value}"`);

            root.style.setProperty("--pseudo-text-row0", `"${boxContent[0][3].value}"`);
            root.style.setProperty("--pseudo-text-row1", `"${boxContent[1][3].value}"`);
            root.style.setProperty("--pseudo-text-row2", `"${boxContent[2][3].value}"`);
            root.style.setProperty("--pseudo-text-row3", `"${boxContent[3][3].value}"`);
              
              
            



return (
  <div className={styles.gridContainer}>
    {boxContent.map((row, i) => (
      <div key={"row" + i + "row" + rowCount[i]} className={styles.gridRow}>
        {row.map((col, j) => (
          <Box
            className={`${styles.gridItem} `} //${styles[`row`+j]} ${styles[`col`+i]}
            key={col.colour + "grid" + col.value}
            value={col.value}
            colour={col.colour}
            spin={col.spin}
            rowIndex={i}
            colIndex={j}
            selected={activeSquare[0] === i && activeSquare[1] === j}
            style={
              style.row.includes(i) & style.column.includes(j)
                ? style.swish
                : null
            }
          />
        ))}
      </div>
    ))}
  </div>
);
}

export default Grid; 