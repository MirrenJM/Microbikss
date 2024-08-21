import React from 'react';
import styles from '../styles/Grid.module.css';

function Box(props){
    let colour = props.colour;
    let highlight = props.selected ? "4px solid #ff991c" : null;  // #f72f35 #ff272d
    let style = props.style;
  
    return (
      <div
        style={{ backgroundColor: colour, border: highlight }}
        className={`${styles.box} ${styles.rubikNums} ${styles[style]} `}
      >
        {props.value}
      </div>
    );
}

export default Box; 