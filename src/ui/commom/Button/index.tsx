import React from "react";

import { CustomButton } from "./styles";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, onClick, type }: ButtonProps) {
  return (
    <React.Fragment>
      <CustomButton type={type} onClick={onClick}>
        {text}
      </CustomButton>
    </React.Fragment>
  );
}
