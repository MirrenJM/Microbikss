import React from 'react';
import styles from '../styles/Grid.module.css';

function Box(props){
    let colour = props.colour;
    let highlight = props.selected ? "4px solid #f72f35" : null;
    let swishLeft = props.swishLeft ? "swishLeft" : null;
    let swishUp = props.swishUp ? "swishUp" : null;
    return (
      <div
        style={{ backgroundColor: colour, border: highlight }}
        className={`${styles.box} ${styles.swishLeft} ${styles.rubikNums} ${styles.fadeInRight}`}
        id={swishLeft}
      >
        {props.value}
      </div>
    );
}

export default Box; 