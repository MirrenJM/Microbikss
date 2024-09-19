import React, { useEffect, useState, useRef } from "react";
import Grid from "./Grid";
import MobileControls from "./MobileControls";
import Winner from "./Winner";
import Timer from "./Timer";
import WinnerStats from "./WinnerStats";

import {
  useStoredBoxContent,
  useStoredHistory,
  useStoredMoves,
} from "../customHooks/useStoredState";

function Game({ gameState, newGame, timer }) {

  // const intitialBoxContent = [
  //   [
  //     { value: "1", colour: "#b71234" },
  //     { value: "2", colour: "#b71234" },
  //     { value: "3", colour: "#b71234" },
  //     { value: "4", colour: "#b71234" },
  //   ],
  //   [
  //     { value: "1", colour: "#0046ad" },
  //     { value: "2", colour: "#0046ad" },
  //     { value: "3", colour: "#0046ad" },
  //     { value: "4", colour: "#0046ad" },
  //   ],
  //   [
  //     { value: "1", colour: "#009b48" },
  //     { value: "2", colour: "#009b48" },
  //     { value: "3", colour: "#009b48" },
  //     { value: "4", colour: "#009b48" },
  //   ],
  //   [
  //     { value: "1", colour: "#ffd500" },
  //     { value: "2", colour: "#ffd500" },
  //     { value: "3", colour: "#ffd500" },
  //     { value: "4", colour: "#ffd500" },
  //   ],
  // ];
  // const verticleBoxContent = [
  //   [
  //     { value: "1", colour: "#b71234" },
  //     { value: "1", colour: "#0046ad" },
  //     { value: "1", colour: "#009b48" },
  //     { value: "1", colour: "#ffd500" },
  //   ],
  //   [
  //     { value: "2", colour: "#b71234" },
  //     { value: "2", colour: "#0046ad" },
  //     { value: "2", colour: "#009b48" },
  //     { value: "2", colour: "#ffd500" },
  //   ],
  //   [
  //     { value: "3", colour: "#b71234" },
  //     { value: "3", colour: "#0046ad" },
  //     { value: "3", colour: "#009b48" },
  //     { value: "3", colour: "#ffd500" },
  //   ],
  //   [
  //     { value: "4", colour: "#b71234" },
  //     { value: "4", colour: "#0046ad" },
  //     { value: "4", colour: "#009b48" },
  //     { value: "4", colour: "#ffd500" },
  //   ],
  // ];

  const [activeSquare, setActiveSquare] = useState([2, 2]);
  const [style, setStyle] = useState({
    swish: "",
    row: [],
    column: [],
  });
  const [moves, setMoves] = useStoredMoves(0);
  const [boxContent, setBoxContent] = useStoredBoxContent(gameState); //gamestate
  const [history, setHistory] = useStoredHistory([gameState]);
  const [rowCount, setRowCount] = useState([0, 0, 0, 0]);
  const prevNewGame = useRef(newGame);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    if (newGame && prevNewGame.current !== newGame) {
      setBoxContent(() => gameState); // gameState
      setHistory([gameState]);
      setMoves(0);
      setStyle({ swish: "jumble", row: [0, 1, 2, 3], column: [0, 1, 2, 3] });
      // update rowcount so that row key changes every time.
      setRowCount((prevCount) => {
        const newRowCount = [...prevCount];
        for (let i = 0; i < newRowCount.length; i++) {
          newRowCount[i] += 1;
        }
        return newRowCount;
      });
    }
    // else {
    //   // reset count on very first render
    //   setRowCount([0, 0, 0, 0]);
    // }
    prevNewGame.current = newGame;
  }, [newGame, gameState]);

  useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault();

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
        default:
          break;
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // useEffect(() => {
  //   let activeRow = activeSquare[0];
  //   let activeCollumn = activeSquare[1];
  //   setSwishLeft(
  //     ([activeRow, 0], [activeRow, 1], [activeRow, 2], [activeRow, 3])
  //   );
  //   setSwishUp(
  //     ([0, activeCollumn],
  //     [1, activeCollumn],
  //     [2, activeCollumn],
  //     [3, activeCollumn])
  //   );

  //   return () => {
  //     setSwishLeft(([], [], [], []));
  //     setSwishUp(([], [], [], []));
  //   };
  // }, boxContent);

  function handleUp() {
    const activeCollumn = activeSquare[1];
    setBoxContent((prevState) => {
      const newContent = prevState.map((row) => [...row]);

      const temp = newContent[0][activeCollumn];
      for (let i = 0; i < newContent.length - 1; i++) {
        newContent[i][activeCollumn] = newContent[i + 1][activeCollumn];
      }
      newContent[newContent.length - 1][activeCollumn] = temp;

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
      column: [0, 1, 2, 3],
    });

    setRowCount((prevCount) => {
      const newRowCount = [...prevCount];
      newRowCount[activeRow] += 1;
      return newRowCount;
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
      setMoves((prevMoves) => prevMoves - 1);
      setBoxContent(history[moves]);

      setStyle({
        swish: "undo",
        row: [0, 1, 2, 3],
        column: [0, 1, 2, 3],
      });
    }
  }

  useEffect(() => {
    const won = checkWin();
    // console.log(won);
    if (won) {
      setHasWon(true);
      setStyle({
        swish: "won",
        row: [0, 1, 2, 3],
        column: [0, 1, 2, 3],
      });
    } else {
      setHasWon(false);
    }
  }, [boxContent]);

  // const checkWin = useMemo(() => {
  //   return checkHorizontalWin() || checkVerticleWin();
  // });

  function checkWin() {
    return checkHorizontalWin() || checkVerticleWin();

    function checkHorizontalWin() {
      //const transposedContent = Array(4).fill(Array(4).fill(null));
      const transposedContent = new Array(4).fill(null).map(()=>new Array(4).fill(null));
      for (let i = 0; i < boxContent.length; i++) {
        const row = boxContent[i];
        const colour = row[0].colour;

        for (let j = 0; j < row.length; j++) {
          const col = row[j];
           
          if (colour === col.colour) {
            transposedContent[j][i] = col.value;
          } else {
            return false;
          }
        }
      }
        return transposedContent.every((row) =>
          ["1", "2", "3", "4"].every((value) => row.includes(value))
        );      
    }

    function checkVerticleWin() {
      const transposedContent = new Array(4).fill(null).map(()=>new Array(4).fill(null));

      for (let i = 0; i < boxContent.length; i++) {
        const row = boxContent[i];
        const rowValueArray = row.map((cell) => cell.value);

        if (
          !["1", "2", "3", "4"].every((value) => rowValueArray.includes(value))
        ) {
          return false;
        }

        for (let j = 0; j < row.length; j++) {
          transposedContent[j][i] = row[j];
        }
      }
      return transposedContent.every((row) =>
        row.every((col) => col.colour === row[0].colour)
      );
    }
  }

  return (
    <>
      <div className="gameBox">
        <div style={{ height: "44px"}}>
          <Timer timer={timer} />
          {hasWon && <Winner/>}
        </div>

        <Grid
          boxContent={boxContent}
          activeSquare={activeSquare}
          style={style}
          rowCount={rowCount}
        />

        {/* {hasWon && <WinnerStats moves={moves} />} */}
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
