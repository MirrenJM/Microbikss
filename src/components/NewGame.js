import React, { useEffect } from "react";

import Game from "./Game";


function NewGame(){
    const intitialBoxContent = [
      [
        { value: "1", colour: "#b71234" },
        { value: "2", colour: "#b71234" },
        { value: "3", colour: "#b71234" },
        { value: "4", colour: "#b71234" },
      ],
      [
        { value: "1", colour: "#0046ad" },
        { value: "2", colour: "#0046ad" },
        { value: "3", colour: "#0046ad" },
        { value: "4", colour: "#0046ad" },
      ],
      [
        { value: "1", colour: "#009b48" },
        { value: "2", colour: "#009b48" },
        { value: "3", colour: "#009b48" },
        { value: "4", colour: "#009b48" },
      ],
      [
        { value: "1", colour: "#ffd500" },
        { value: "2", colour: "#ffd500" },
        { value: "3", colour: "#ffd500" },
        { value: "4", colour: "#ffd500" },
      ],
    ];

    // useEffect(() => {
    // setBoxContent(() => intitialBoxContent);
    // setHistory(() => intitialBoxContent);
    // setMoves(0);
    // }, []);
  
    setBoxContent(() => intitialBoxContent);
    setHistory(() => boxContent);
    setMoves(0);

}