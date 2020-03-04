import React, { ReactNode } from "react";
import "./Button.scss";

export interface ButtonProps {
  handleClick: () => void;
  children: ReactNode;
  buttonStyle?: string;
}

const Button = (props: ButtonProps) => {
  const { handleClick, children, buttonStyle } = props;

  return (
    <div onClick={handleClick} className={buttonStyle ? buttonStyle : "button"}>
      {children}
    </div>
  );
};

export default Button;
