import React from "react";
import "./Button.css";

const Button: React.FC<any> = ({ text, onClick, type }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button onClick={handleClick} className="form-button slide__button" type={type}>
      {text}
    </button>
  );
};

export default Button;