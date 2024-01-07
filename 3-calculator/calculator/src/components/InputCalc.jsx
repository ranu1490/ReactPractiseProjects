import React from "react";

const InputCalc = ({ className, display }) => {
  return <input type="text" className={className} value={display} readOnly />;
};

export default InputCalc;
