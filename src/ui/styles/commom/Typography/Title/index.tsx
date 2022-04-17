import React from "react";
import { CustomTitle } from "./styles";

interface ITitleProps {
  text?: string;
  className?: string;
}

export default function Title({ text, className }: ITitleProps) {
  return (
    <React.Fragment>
      <CustomTitle className={className}>{text}</CustomTitle>
    </React.Fragment>
  );
}
