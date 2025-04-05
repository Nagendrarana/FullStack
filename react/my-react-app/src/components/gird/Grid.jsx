import Card from "../card/card";
import "./grid.css";
import { useState } from "react";

function Grid({ numberOfCards }) {
  const [currentTurn, setCurrentTurn] = useState(true); // true = O, false = X
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  function checkWinner(updatedBoard) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return combo;
      }
    }
    return null;
  }
  function resetGame() {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setWinningCombo([]);
    setCurrentTurn(true);
  }

  function play(idx) {
    if (board[idx] !== "" || winner) return;

    const newBoard = [...board];
    newBoard[idx] = currentTurn ? "circle" : "cross";
    setBoard(newBoard);

    const winCombo = checkWinner(newBoard);
    if (winCombo) {
      setWinner(newBoard[winCombo[0]]);
      setWinningCombo(winCombo);
    } else {
      setCurrentTurn(!currentTurn);
    }
  }

  return (
    <>
      <h1 className="highlightTurn text-white">
        {winner ? `Winner: ${winner}` : `Current Turn: ${currentTurn ? "O" : "X"}`}
      </h1>
      <div className="grid">
        {board.map((value, idx) => (
          <Card
            key={idx}
            iconName={value}
            onPlay={() => play(idx)}
            highlight={winningCombo.includes(idx)}
          />
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>

    </>
  );
}

export default Grid;
