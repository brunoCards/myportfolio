import React from "react";

import { CustomButton } from "./styles";

interface ButtonProps {
  text?: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <React.Fragment>
      <CustomButton>{text}</CustomButton>
    </React.Fragment>
  );
}
