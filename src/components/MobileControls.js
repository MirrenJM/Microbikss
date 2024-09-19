import React from "react";
import styles from '../styles/MobileControls.module.css';

function MobileControls({handleDown, handleLeft, handleRight, handleSpace, handleUp}){
    return (
      <div className={styles.mobileControlsContainer}>
        <div className={styles.upDiv}>
        <button className={`${styles.upButton} ${styles.btn} `} onClick={handleUp}>↑</button>
        </div>
        <div className={styles.buttonRow}>
        <button className={`${styles.leftButton} ${styles.btn} `} onClick={handleLeft}>←</button>
        <button className={`${styles.rightButton} ${styles.btn} `} onClick={handleRight}>→</button>
        </div>
        <div>
        <button className={`${styles.downButton} ${styles.btn} `} onClick={handleDown}>↓</button>
        </div>
        <div className={`${styles.buttonSpace} `}>
        <button className={`${styles.spaceButton} ${styles.btn} `} onClick={handleSpace}>Undo</button>
        </div>
      </div>
    );
}

export default MobileControls;