import React from "react";
import { useStoredState } from "../customHooks/useStoredState";

function WinnerStats({moves}){
      const [time, setTime] = useStoredState(0, "storeTime");
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;


    return(
          <p className="winnerStats">
            You won in {moves} moves in a recorded time of {hours}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
    );
}

export default WinnerStats;