//#region react
import React from "react";
//#endregion

interface IBoxProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: IBoxProps) {
  return (
    <React.Fragment>
      <div className={className}>{children}</div>
    </React.Fragment>
  );
}
