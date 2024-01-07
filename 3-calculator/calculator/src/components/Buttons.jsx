import React from "react";

const Buttons = ({ button, buttonGrp, handleButton }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "9",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={buttonGrp}>
      {buttons.map((item) => (
        <button className={button} onClick={()=>handleButton(item)}>{item}</button>
      ))}
    </div>
  );
};

export default Buttons;
