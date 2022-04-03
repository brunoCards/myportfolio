import React from "react";

import { CustomBox } from "./styles";

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <React.Fragment>
      <CustomBox className={className}>{children}</CustomBox>
    </React.Fragment>
  );
}
