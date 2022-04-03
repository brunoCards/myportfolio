import React from "react";
import { CustomQuinaryTitle } from "./styles";

interface QuinaryTitleProps {
  text?: string;
  className?: string;
}

export default function QuinaryTitle({ className, text }: QuinaryTitleProps) {
  return (
    <React.Fragment>
      <CustomQuinaryTitle className={className}>{text}</CustomQuinaryTitle>
    </React.Fragment>
  );
}
