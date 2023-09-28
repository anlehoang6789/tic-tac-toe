import React from "react";
import Cell from "./Cell";

// Ta có thể dùng Aray(9).fill() để tạo ra 1 mảng có 9 phần tử chưa được định nghĩa
// Áp dụng nó với map để tạo ra 9 component <Cell></Cell> mà kh phải copy ra 9 cái
const Board = (props) => {
  return (
    <div className="game-board">
      {/* <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell> */}
      {props.cells.map(
        (
          item,
          index //cells bên game với cells --thuộc tính có giá trị là Array(9).fill(null)
        ) => (
          <Cell
            key={index}
            value={item} //props of Cell is value
            onClick={() => props.onClick(index)} //props of Cell is onClick and onClick(index) is in Game
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          ></Cell>
        )
      )}
    </div>
  );
};

export default Board;
