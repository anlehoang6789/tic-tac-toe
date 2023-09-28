import React from "react";

const Cell = ({ value, onClick, className }) => {
  //const {value, onClick} = props; //destructuring cach tuong minh. Ngoai ra co cach viet tat ngay tren component
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
