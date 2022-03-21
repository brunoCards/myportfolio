import React from "react";
import { CustomSectionFooter, CustomSectionFooterText } from "./styles";

interface SectionFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionFooter({
  children,
  className,
}: SectionFooterProps) {
  return (
    <React.Fragment>
      <CustomSectionFooter>
        <CustomSectionFooterText>
          {children}
        </CustomSectionFooterText>
      </CustomSectionFooter>
    </React.Fragment>
  );
}
