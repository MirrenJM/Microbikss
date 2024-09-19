import "./App.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Header from './components/Header';
import ControlPanel from "./components/ControlPanel";
import Timer from "./components/Timer";
import Game from './components/Game';
import Instructions from "./components/Instructions";
import { useStoredBoxContent, useStoredState } from "./customHooks/useStoredState";


 function App() {
 

   const initialBoxContent = [
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
const jumbled = jumble();
const [newGameState, setNewGameState] = useStoredState(jumbled, "newgame");
const [isInstructions, setIsInstructions ] = useState(false); 
const [newGame, setNewGame] = useState(false);
 const [timer, setTimer] = useState(false);
const isInitialMount = useRef(true);

 function startNewGame() {
  setNewGame(true);
 }
 useEffect(() => {
   if (isInitialMount.current) {
     isInitialMount.current = false;
     return; 
   } 
      const jumbledBoxContent = jumble();
     setNewGameState(() => (jumbledBoxContent));
     setNewGame(false);
   
    // return () => setNewGame(false);
 }, [newGame]); // setNewGame

function jumble() {
  let flatContent = [
    { value: "1", colour: "#b71234"},
    { value: "2", colour: "#b71234"},
    { value: "3", colour: "#b71234"},
    { value: "4", colour: "#b71234"},
    { value: "1", colour: "#0046ad"},
    { value: "2", colour: "#0046ad"},
    { value: "3", colour: "#0046ad"},
    { value: "4", colour: "#0046ad"},
    { value: "1", colour: "#009b48"},
    { value: "2", colour: "#009b48"},
    { value: "3", colour: "#009b48"},
    { value: "4", colour: "#009b48"},
    { value: "1", colour: "#ffd500"},
    { value: "2", colour: "#ffd500"},
    { value: "3", colour: "#ffd500"},
    { value: "4", colour: "#ffd500"},
  ];

   for (let i = flatContent.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [flatContent[i], flatContent[j]] = [flatContent[j], flatContent[i]];
   }

   let jumbleContent = [];
   for (let i = 0; i < 4; i++) {
     // Slice a chunk of 4 elements for each row and add it to the grid
     jumbleContent.push(flatContent.slice(i * 4, (i + 1) * 4));
   }

   return jumbleContent;

}

function showInstructions(){
  setIsInstructions(!isInstructions); 
  // if(isInstructions){
  //   setNewGameState(() => (initialBoxContent));
  // }
}
function showTimer(){
  setTimer(!timer);
}

  return (
    <>
      <div className="app">
        <Header />
        <ControlPanel
          handleNewGame={startNewGame}
          handleInstructions={showInstructions}
          handleTimer={showTimer}
        />
        <div className="gameContainer">
          <Game gameState={newGameState} newGame={newGame} timer={timer} />
          <div className="instructionContainer">
            {isInstructions && <Instructions />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
