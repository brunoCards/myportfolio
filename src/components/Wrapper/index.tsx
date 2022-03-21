import React from "react";

import { CustomWrapper } from "./styles";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <React.Fragment>
      <CustomWrapper>{children}</CustomWrapper>
    </React.Fragment>
  );
}
