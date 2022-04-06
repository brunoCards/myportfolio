import React from "react";

import { CustomBox } from "./styles";

interface IBoxProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: IBoxProps) {
  return (
    <React.Fragment>
      <CustomBox className={className}>{children}</CustomBox>
    </React.Fragment>
  );
}
