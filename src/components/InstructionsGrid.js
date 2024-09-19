import React from "react";
import styles from "../styles/Instructions.module.css";
import Box from "./Box";

function InstructionsGrid() {
  const boxContent = [
    [
      { value: "1", colour: "#b71234" },
      { value: "2", colour: "#b71234" },
      { value: "3", colour: "#b71234" },
      { value: "4", colour: "#b71234" },
    ],
    [
      { value: "2", colour: "#0046ad" },
      { value: "3", colour: "#0046ad" },
      { value: "4", colour: "#0046ad" },
      { value: "1", colour: "#0046ad" },
    ],
    [
      { value: "3", colour: "#009b48" },
      { value: "4", colour: "#009b48" },
      { value: "1", colour: "#009b48" },
      { value: "2", colour: "#009b48" },
    ],
    [
      { value: "4", colour: "#ffd500" },
      { value: "1", colour: "#ffd500" },
      { value: "2", colour: "#ffd500" },
      { value: "3", colour: "#ffd500" },
    ],
  ];
  return (
    <div className={styles.gridContainer}>
      {boxContent.map((row, i) => {
        const gridRowIndex = "gridRow" + i;
        return (
          <div key={i} className={`${styles[gridRowIndex]} ${styles.gridRow}`}>
            {row.map((col, j) => {
              const gridColindex = "box" + i + j;
              const colour = col.colour;
              const value = col.value;
              return (
                <div
                //   style={{ backgroundColor: colour}}
                  className={`${styles.box} ${styles.rubikNums} ${styles[gridColindex]}`}
                >
                  {value}
                </div>

                //   <Box
                //     className={`${styles[gridRowIndex]} ${styles.gridItem}`}
                //     key={col.colour + col.value}
                //     value={col.value}
                //     colour={col.colour}
                //   />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default InstructionsGrid;
