import React from "react";
import { CustomTitle } from "./styles";

interface TitleProps {
  text?: string;
  className?: string;
}

export default function Title({ text, className }: TitleProps) {
  return (
    <React.Fragment>
      <CustomTitle className={className}>{text}</CustomTitle>
    </React.Fragment>
  );
}
