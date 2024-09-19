import React from 'react';
import styles from '../styles/Grid.module.css';


function Box(props){
    let colour = props.colour;
    let highlight = props.selected ? "4px solid #ff991c" : null;  // #f72f35 #ff272d
    let style = props.style;
    let rowIndex = "row" + props.rowIndex;
    let colIndex = 'col' + props.colIndex;
    const root = document.querySelector(":root");
            root.style.setProperty("--jumbleDelay", `${props.rowIndex}`);
   
  
    return (
      <div
        style={{ backgroundColor: colour, border: highlight }}
        className={`${styles.box} ${styles.rubikNums} ${styles[style]} ${styles[rowIndex]} ${styles[colIndex]}`}
      >
        {props.value}
      </div>
    );
}

export default Box; 