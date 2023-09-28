import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../ruleGame";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    isXNext: true,
    //đây được gọi là custom lại hook cho 2 cái useState thành 1 cái
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // Truyền index để biết nhấn vào vị trí ô nào
    const boardCopy = [...state.board]; //tạo biến này để tạo ra 1 mảng clone của board
    if (winner || boardCopy[index]) return; //check xem đã có người win hay ô đó đã chọn chưa. Nếu có rồi thì kh
    //cho nhấn nữa
    boardCopy[index] = state.isXNext ? "X" : "O";
    // setBoard(boardCopy);
    // setIsXNext(!isXNext);
    setState({
      board: boardCopy,
      isXNext: !state.isXNext,
    });
  }; //function help when click in squard it will display X || O

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    setState({
      board: Array(9).fill(null),
    });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">{`Winner is ${winner}`}</div>}
      {/* Cú pháp winner && có nghĩa là có winner mới hiện giúp tránh khỏi có padding trước mà kh hiện winner */}
      <button onClick={handleResetGame} className="btn-reset">
        Reset Game
      </button>
    </div>
  );
};

export default Game;
