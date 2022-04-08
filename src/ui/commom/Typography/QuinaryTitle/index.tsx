import React from "react";
import { CustomQuinaryTitle } from "./styles";

interface IQuinaryTitleProps {
  text?: string;
  className?: string;
}

export default function QuinaryTitle({ className, text }: IQuinaryTitleProps) {
  return (
    <React.Fragment>
      <CustomQuinaryTitle className={className}>{text}</CustomQuinaryTitle>
    </React.Fragment>
  );
}
