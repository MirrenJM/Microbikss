import React, {useEffect } from "react";
import styles from '../styles/Header.module.css';

function Header(){
  
    return (
      <div className="headerDiv">
        <h1 className="rubik-micro">
          <span className="micro-red">M</span>
          <span className="micro-blue">i</span>
          <span className="micro-green">c</span>
          <span className="micro-yellow">r</span>
          <span className="micro-red">o</span>
          <span className="micro-blue">b</span>
          <span className="micro-green">i</span>
          <span className="micro-yellow">k</span>
          <span className="micro-red">s</span>
        </h1>
      </div>
    );
}

export default Header; 