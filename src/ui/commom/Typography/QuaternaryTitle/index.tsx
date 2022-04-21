//#region react
import React from "react";
//#endregion

interface IQuaternaryTitleProps {
  text?: string;
  className?: string;
}

export default function QuaternaryTitle({
  className,
  text,
}: IQuaternaryTitleProps) {
  return (
    <React.Fragment>
      <h4 className={className}>{text}</h4>
    </React.Fragment>
  );
}
