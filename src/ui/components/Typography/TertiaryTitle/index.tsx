import React from "react";
import { CustomTertiaryTitle } from "./styles";

interface TertiaryTitleProps {
  text?: string;
  className?: string;
}

export default function TertiaryTitle({ className, text }: TertiaryTitleProps) {
  return (
    <React.Fragment>
      <CustomTertiaryTitle className={className}>{text}</CustomTertiaryTitle>
    </React.Fragment>
  );
}
