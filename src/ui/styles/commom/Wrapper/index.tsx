import React from "react";

import { CustomWrapper } from "./styles";

interface IWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: IWrapperProps) {
  return (
    <React.Fragment>
      <CustomWrapper>{children}</CustomWrapper>
    </React.Fragment>
  );
}
