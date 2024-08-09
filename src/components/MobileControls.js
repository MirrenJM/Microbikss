import React from "react";
import styles from '../styles/MobileControls.module.css';

function MobileControls({handleDown, handleLeft, handleRight, handleSpace, handleUp}){
    return (
      <div className={styles.mobileControlsContainer}>
        <div className={styles.upDiv}>
        <button className={styles.upButton} onClick={handleUp}>↑</button>
        </div>
        <div className={styles.buttonRow}>
        <button className={styles.leftButton} onClick={handleLeft}>←</button>
        <button className={styles.rightButton} onClick={handleRight}>→</button>
        </div>
        <div>
        <button className={styles.downButton} onClick={handleDown}>↓</button>
        </div>
        <div className={styles.buttonSpace}>
        <button className={styles.spaceButton} onClick={handleSpace}>Undo</button>
        </div>
      </div>
    );
}

export default MobileControls;