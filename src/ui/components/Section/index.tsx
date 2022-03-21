import React from "react";

import { CustomSection, CustomSectionWrapper } from "./styles";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <React.Fragment>
      <CustomSection className={className}>
        <CustomSectionWrapper className={className}>
          {children}
        </CustomSectionWrapper>
      </CustomSection>
    </React.Fragment>
  );
}
