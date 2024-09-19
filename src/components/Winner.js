import React from "react";
import { useStoredState } from "../customHooks/useStoredState";

function Winner(){
  // const [time, setTime] = useStoredState(0, "storeTime");
  // const hours = Math.floor(time / 3600);
  // const minutes = Math.floor((time % 3600) / 60);
  // const seconds = time % 60;

    return (
      
        // {/* {
        //   <p className="winnerStats">
        //     You won in {moves} moves in a recorded time of {hours}:
        //     {minutes.toString().padStart(2, "0")}:
        //     {seconds.toString().padStart(2, "0")}
        //   </p>
        // } */}
        <h1 className="winner">
          <span className="winner-red">W</span>
          <span className="winner-blue">I</span>
          <span className="winner-green">N</span>
          <span className="winner-yellow">N</span>
          <span className="winner-red">E</span>
          <span className="winner-blue">R</span>
          <span className="winner-green">!</span>
        </h1>
    
    );
}
export default Winner; 