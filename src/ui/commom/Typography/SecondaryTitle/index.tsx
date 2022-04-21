//#region react
import React from "react";
//#endregion

interface ISecondaryTitleProps {
  text?: string;
  className?: string;
}

export default function SecondaryTitle({
  className,
  text,
}: ISecondaryTitleProps) {
  return (
    <React.Fragment>
      <h2 className={className}>{text}</h2>
    </React.Fragment>
  );
}
