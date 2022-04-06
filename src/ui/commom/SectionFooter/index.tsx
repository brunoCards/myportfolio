import React from "react";
import { CustomSectionFooter, CustomSectionFooterText } from "./styles";

interface ISectionFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionFooter({
  children,
  className,
}: ISectionFooterProps) {
  return (
    <React.Fragment>
      <CustomSectionFooter>
        <CustomSectionFooterText>{children}</CustomSectionFooterText>
      </CustomSectionFooter>
    </React.Fragment>
  );
}
