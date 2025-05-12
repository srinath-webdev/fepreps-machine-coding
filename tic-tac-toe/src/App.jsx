import React, { useState } from "react";
import "./App.css"; // optional CSS

const App = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderCell = (index) => (
    <button className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : board.every(cell => cell)
          ? "Draw!"
          : `Next Player: ${xIsNext ? "X" : "O"}`}
      </div>
      <div className="board">
         {board.map((_, index) => renderCell(index))}
      </div>
      <button onClick={resetGame} className="reset-btn">Restart</button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
