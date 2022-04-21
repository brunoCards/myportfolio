//#region react
import React from "react";
//#endregion

interface IParagraphProps {
  text?: string;
  className?: string;
}

export default function Paragraph({ className, text }: IParagraphProps) {
  return (
    <React.Fragment>
      <p className={className}>{text}</p>
    </React.Fragment>
  );
}
