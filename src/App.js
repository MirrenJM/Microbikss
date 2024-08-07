import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import Header from './components/Header';
import ControlPanel from "./components/ControlPanel";
import Game from './components/Game';


// function Header() {
//   return (
//     <h1 className="rubik-micro">
//       <span className="micro-red">M</span>
//       <span className="micro-blue">i</span>
//       <span className="micro-green">c</span>
//       <span className="micro-yellow">r</span>
//       <span className="micro-red">o</span>
//       <span className="micro-blue">b</span>
//       <span className="micro-green">i</span>
//       <span className="micro-yellow">k</span>
//       <span className="micro-red">s</span>
//     </h1>
//   );
// }

// function Grid({ boxContent, activeSquare }) {
//   const boxes = Array(4).fill(Array(4).fill(null));
//   return (
//     <div className="App">
//       <div className="grid-container">
//         {boxes.map((row, i) => (
//           <div key={i} className="grid-row">
//             {row.map((col, j) => (
//               <Box
//                 key={boxContent[i][j].colour + boxContent[i][j].value}
//                 className="grid-item"
//                 colour={boxContent[i][j].colour}
//                 value={boxContent[i][j].value}
//                 //this is wrong
//                 selected={activeSquare.col === j && activeSquare.row === i}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//  function Box(props) {
//   const colour = props.colour; 
//   //let colour = props.colour;
//   let highlight = props.selected ? "4px solid #f72f35" : null;
//   let slide = props.slide === "slide" ? "slide" : null;

//   return (
//     <div
//       id={slide}
//       style={{ background: colour, border: highlight }}
//       className="box rubik-nums"
//     >
//       {props.value}
//     </div>
//   );
// };

 function App() {
//   const [activeSquare, setActiveSquare] = useState([2, 2]);
//   const [boxContent, setBoxContent] = useState([
//     [
//       { value: "1", colour: "#b71234" },
//       { value: "2", colour: "#b71234" },
//       { value: "3", colour: "#b71234" },
//       { value: "4", colour: "#b71234" },
//     ],
//     [
//       { value: "1", colour: "#0046ad" },
//       { value: "2", colour: "#0046ad" },
//       { value: "3", colour: "#0046ad" },
//       { value: "4", colour: "#0046ad" },
//     ],
//     [
//       { value: "1", colour: "#009b48" },
//       { value: "2", colour: "#009b48" },
//       { value: "3", colour: "#009b48" },
//       { value: "4", colour: "#009b48" },
//     ],
//     [
//       { value: "1", colour: "#ffd500" },
//       { value: "2", colour: "#ffd500" },
//       { value: "3", colour: "#ffd500" },
//       { value: "4", colour: "#ffd500" },
//     ]
//   ]);
//   const [hasWon, setHasWon] = useState(false);

  // useEffect(() => {
  //   function checkWin() {
  //     return checkHorizontalWin() || checkVerticleWin();

  //     function checkHorizontalWin() {
  //       const transposedContent = Array(4).fill(Array(4).fill(null));

  //       for (let i = 0; i < boxContent.length; i++) {
  //         const row = boxContent[i];
  //         const colour = row[0].colour;

  //         for (let j = 0; j < row.length; j++) {
  //           const col = row[j];

  //           if (colour === col.colour) {
  //             transposedContent[j][i] = col.value;
  //           } else {
  //             return false;
  //           }
  //         }
  //       }
  //       return transposedContent.every((row) =>
  //         ["1", "2", "3", "4"].every((value) => row.includes(value))
  //       );
  //     }

  //     function checkVerticleWin() {
  //       const transposedContent = Array(4).fill(Array(4).fill(null));

  //       for (let i = 0; i < boxContent.length; i++) {
  //         const rowValueArray = Array(4).fill(null);
  //         const row = boxContent[i];

  //         for (let j = 0; j < row.length; j++) {
  //           rowValueArray[j] = row[i].value;
  //           transposedContent[j][i] = row[j].colour;
  //         }
  //         if (
  //           !["1", "2", "3", "4"].every((value) =>
  //             rowValueArray.includes(value)
  //           )
  //         ) {
  //           return false;
  //         }
  //       }
  //       return transposedContent.every((row) =>
  //         row.every((col) => col === row[0])
  //       );
  //     }
  //   }
  //   const won = checkWin();
  //   if (won) {
  //     setHasWon(true);
  //     alert("you won");
  //   } else {
  //     setHasWon(false);
  //   }
  // }, [boxContent]);

  // const checkWin = useMemo(() => {
  //   return checkHorizontalWin() || checkVerticleWin();
  // });

  // function handleUp() {
  //   let colIndex = activeSquare.col;
  //   console.log(activeSquare.col + "handle up ");
  //   // setBoxContent((prevContent) => {
    //   const newContent = prevContent.map((row) => [...row]);

    //   const temp = newContent[0][colIndex];
    //   for (let i = 0; i < newContent.length - 1; i++) {
    //     newContent[i][colIndex] = newContent[i + 1][colIndex];
    //   }
    //   newContent[newContent.length - 1][colIndex] = temp;

    //   return newContent;
    // });
//   }
//   function handleLeft() {
//     console.log(activeSquare.row + "handle left ");
//     let rowIndex = activeSquare.row;
//     setBoxContent((prevContent) => {
//       const newContent = prevContent.map((row) => [...row]);

//       const activeCollumn = newContent[rowIndex];

//       const temp = activeCollumn[0];
//       for (let i = 0; i < activeCollumn.length - 1; i++) {
//         activeCollumn[i] = activeCollumn[i + 1];
//       }
//       activeCollumn[activeCollumn.length - 1] = temp;

//       return newContent;
//     });
//   }
//   function handleDown() {
//     setActiveSquare((prevSquares) => {
//       let index = prevSquares.col + 1;
//       // hard code
//       if (index === 4) {
//         index = 0;
//       }
//       return {
//         ...prevSquares,
//         col: index,
//       };
//     });
//   }

//   function handleRight() {
//     setActiveSquare((prevSquares) => {
//       let index = prevSquares.row + 1;
//       // hardCode
//       if (index === 4) {
//         index = 0;
//       }
//       return {
//         ...prevSquares,
//         row: index,
//       };
//     });
//   }

 
//   document.addEventListener("keydown", (e) = {handleKeyDown});
//     function handleKeyDown(event) {
//       switch (event.key) {
//         case "ArrowUp":
//           handleUp();
//           break;
//         case "ArrowDown":
//           handleDown();
//           break;
//         case "ArrowLeft":
//           handleLeft();
//           break;
//         case "ArrowRight":
//           handleRight();
//           break;
//       }
//     }
   
// const boxes = Array(4).fill(Array(4).fill(null));
//   // const memoizedBoxContent = useMemo(() => boxContent, [boxContent]);
  return (
    <>
      <div>
        <Header />
        <ControlPanel />
        <Game />
        {/* <div className="App">
          <div className="grid-container">
            {boxes.map((row, i) => (
              <div key={i} className="grid-row">
                {row.map((col, j) => (
                  <Box
                    key={boxContent[i][j].colour + boxContent[i][j].value}
                    className="grid-item"
                    colour={boxContent[i][j].colour}
                    value={boxContent[i][j].value}
                    //this is wrong
                    selected={activeSquare.col === j && activeSquare.row === i}
                  />
                ))}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
