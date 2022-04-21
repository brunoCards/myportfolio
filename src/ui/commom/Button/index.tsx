//#region react
import React from "react";
//#endregion

interface IButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  text,
  onClick,
  type,
  className,
}: IButtonProps) {
  return (
    <React.Fragment>
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </React.Fragment>
  );
}
