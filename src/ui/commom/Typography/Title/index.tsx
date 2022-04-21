//#region react
import React from "react";
//#endregion

interface ITitleProps {
  text?: string;
  className?: string;
}

export default function Title({ text, className }: ITitleProps) {
  return (
    <React.Fragment>
      <h1 className={className}>{text}</h1>
    </React.Fragment>
  );
}
