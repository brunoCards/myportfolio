import React from "react";
import { CustomTertiaryTitle } from "./styles";

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
      <CustomTertiaryTitle className={className}>{text}</CustomTertiaryTitle>
    </React.Fragment>
  );
}
