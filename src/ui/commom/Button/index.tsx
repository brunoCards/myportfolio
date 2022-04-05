import React from "react";

import { CustomButton } from "./styles";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <React.Fragment>
      <CustomButton onClick={onClick}>{text}</CustomButton>
    </React.Fragment>
  );
}
