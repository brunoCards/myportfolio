import React from "react";
import { CustomSecondaryTitle } from "./styles";

interface SecondaryTitleProps {
  text?: string;
  className?: string;
}

export default function SecondaryTitle({
  className,
  text,
}: SecondaryTitleProps) {
  return (
    <React.Fragment>
      <CustomSecondaryTitle className={className}>{text}</CustomSecondaryTitle>
    </React.Fragment>
  );
}
