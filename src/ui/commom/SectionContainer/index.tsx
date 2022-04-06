import React from "react";

import { CustomSectionContainer } from "./styles";

interface ISectionContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: ISectionContainerProps) {
  return (
    <React.Fragment>
      <CustomSectionContainer className={className}>
        {children}
      </CustomSectionContainer>
    </React.Fragment>
  );
}
