import React from "react";
import styles from '../styles/Grid.module.css';
import Box from './Box';

function Grid({boxContent, activeSquare, style}){


return (

    <div className={styles.gridContainer}>
      {boxContent.map((row, i) => (
        <div key={'row'+ i} className={styles.gridRow}>
          {row.map((col, j) => (
            <Box
              className={`${styles.gridItem} ${col===3&&styles.end}`}
              key={col.colour + col.value}
              value={col.value}
              colour={col.colour}
              selected={activeSquare[0] === i && activeSquare[1] === j}
              style = {style.row.includes(i) & style.column.includes(j) ? style.swish : null}
            />
          ))}
        </div>
      ))}
    </div>
 
);
}

export default Grid; 