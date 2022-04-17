import React from "react";
import { CustomSecondaryTitle } from "./styles";

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
      <CustomSecondaryTitle className={className}>{text}</CustomSecondaryTitle>
    </React.Fragment>
  );
}
