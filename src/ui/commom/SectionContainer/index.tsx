//#region react
import React from "react";
//#endregion

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
      <div className={className}>{children}</div>
    </React.Fragment>
  );
}
