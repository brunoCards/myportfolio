//#region react
import React from "react";
//#endregion

interface ITertiaryTitleProps {
  text?: string;
  className?: string;
}

export default function TertiaryTitle({
  className,
  text,
}: ITertiaryTitleProps) {
  return (
    <React.Fragment>
      <h3 className={className}>{text}</h3>
    </React.Fragment>
  );
}
