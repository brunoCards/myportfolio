import React from "react";

import { CustomButton } from "./styles";

interface IButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, onClick, type }: IButtonProps) {
  return (
    <React.Fragment>
      <CustomButton type={type} onClick={onClick}>
        {text}
      </CustomButton>
    </React.Fragment>
  );
}
