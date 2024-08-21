import React, { useEffect, useState, useRef } from "react";
import Grid from "./Grid";
import MobileControls from "./MobileControls";

import {
  useStoredBoxContent,
  useStoredHistory,
  useStoredMoves,
} from "../customHooks/useStoredState";

function Game({gameState, newGame}) {
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

  const [activeSquare, setActiveSquare] = useState([2, 2]);
  const [swishLeft, setSwishLeft] = useState(([], [], [], []));
  const [swishUp, setSwishUp] = useState(([], [], [], []));
  const [style, setStyle] = useState({
    swish: "",
    row: [],
    column: [],
  });
  const [moves, setMoves] = useStoredMoves(0);
  const [boxContent, setBoxContent] = useStoredBoxContent(gameState);
  const [history, setHistory] = useStoredHistory([boxContent]);
  const prevNewGame = useRef(newGame);

  useEffect(() => {
    if (newGame && prevNewGame.current !== newGame) {
      setBoxContent(gameState);
      setHistory([gameState]);
      setMoves(0);
      console.log("useeffect game");
    }
    prevNewGame.current = newGame;
  }, [newGame, gameState]);

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "ArrowUp":
          handleUp();
          break;
        case "ArrowLeft":
          handleLeft();
          break;
        case "ArrowDown":
          handleDown();
          break;
        case "ArrowRight":
          handleRight();
          break;
        case " ":
          handleSpace();
          break;
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    let activeRow = activeSquare[0];
    let activeCollumn = activeSquare[1];
    setSwishLeft(
      ([activeRow, 0], [activeRow, 1], [activeRow, 2], [activeRow, 3])
    );
    setSwishUp(
      ([0, activeCollumn],
      [1, activeCollumn],
      [2, activeCollumn],
      [3, activeCollumn])
    );

    return () => {
      setSwishLeft(([], [], [], []));
      setSwishUp(([], [], [], []));
    };
  }, boxContent);

  function handleUp() {
    const activeCollumn = activeSquare[1];
    setBoxContent((prevState) => {
      const newContent = prevState.map((row) => [...row]);

      const temp = newContent[0][activeCollumn];
      for (let i = 0; i < newContent.length - 1; i++) {
        newContent[i][activeCollumn] = newContent[i + 1][activeCollumn];

        newContent[i][activeCollumn].spin = "up"; 
      }
      newContent[newContent.length - 1][activeCollumn] = temp;
      newContent[newContent.length - 1][activeCollumn].spin = "up";

      return newContent;
    });

    setMoves((prevMoves) => {
      const newMoves = prevMoves + 1;
      setHistory((prevHistory) => [
        ...prevHistory.slice(0, newMoves),
        boxContent,
      ]);
      return newMoves;
    });
     setStyle({
       swish: "up",
       row: [0, 1, 2, 3],
       column: [activeCollumn],
     });

  }
  function handleLeft() {
    const activeRow = activeSquare[0];

    setBoxContent((prevState) => {
      const newContent = prevState.map((row) => [...row]);

      const temp = newContent[activeRow][0];
      for (let i = 0; i < newContent[activeRow].length - 1; i++) {
        newContent[activeRow][i] = newContent[activeRow][i + 1]; 
        
        
      }
      newContent[activeRow][newContent[activeRow].length - 1] = temp;

      return newContent;
    });

    setMoves((prevMoves) => {
      const newMoves = prevMoves + 1;
      setHistory((prevHistory) => [
        ...prevHistory.slice(0, newMoves),
        boxContent,
      ]);
      return newMoves;
    });
   
    setStyle({
        swish: "left",
        row: [activeRow],
        column: [0,1,2,3]
    });

  }

  function handleDown() {
    setActiveSquare((prevSquare) => {
      const newSquare = [...prevSquare];
      let newRow = newSquare[0] + 1;
      if (newSquare[0] === boxContent.length - 1) {
        newRow = 0;
      }
      newSquare[0] = newRow;
      return newSquare;
    });
  }

  function handleRight() {
    setActiveSquare((prevSquare) => {
      const newSquare = [...prevSquare];
      let newColIndex = newSquare[1] + 1;
      if (newSquare[1] === boxContent[0].length - 1) {
        newColIndex = 0;
      }
      newSquare[1] = newColIndex;
      return newSquare;
    });
  }
  function handleSpace() {
    if (moves > 0) {
      console.log(moves + " space before");

      setMoves((prevMoves) => prevMoves - 1);
      setBoxContent(history[moves]);
      console.log(moves + " space after");
    }
  }

  return (
    <>
      <div className="gameBox">
        <Grid
          boxContent={boxContent}
          activeSquare={activeSquare}
          swishLeft={swishLeft}
          swishUp={swishUp}
          style={style}
        />
        <MobileControls
          handleDown={handleDown}
          handleLeft={handleLeft}
          handleUp={handleUp}
          handleRight={handleRight}
          handleSpace={handleSpace}
        />
      </div>
    </>
  );
}

export default Game;
