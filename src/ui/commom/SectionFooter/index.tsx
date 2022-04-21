//#region react
import React from "react";
//#endregion

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
      <footer className={className}>
        <h4 className={className}>{children}</h4>
      </footer>
    </React.Fragment>
  );
}
