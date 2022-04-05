import React from "react";

import { CustomSection, CustomSectionWrapper } from "./styles";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <React.Fragment>
      <CustomSection id={id} className={className}>
        <CustomSectionWrapper className={className}>
          {children}
        </CustomSectionWrapper>
      </CustomSection>
    </React.Fragment>
  );
}