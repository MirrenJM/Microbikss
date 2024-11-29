import React from "react";

function HighscoresBoard(){
    let highscores = [{name:"john", time: 22, moves: 44}, {name:"jeff", time: 23, moves: 66}, {name: "peter", time: 50, moves: 88}]
    return (
      <div className="highscoresBoard">
        <h3>Highscores Board</h3>
        <ol>
          {highscores.map((winner) => (
            <li>
                {winner.name} - moves {winner.moves} - time: {winner.time}
            </li>
          ))}
        </ol>
      </div>
    );
}

export default HighscoresBoard; 