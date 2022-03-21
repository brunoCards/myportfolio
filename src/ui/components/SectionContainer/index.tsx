import React from "react";

import { CustomSectionContainer } from "./styles";

interface SectionContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <React.Fragment>
      <CustomSectionContainer className={className}>
        {children}
      </CustomSectionContainer>
    </React.Fragment>
  );
}
