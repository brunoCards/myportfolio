//#region react
import React from "react";
//#endregion

interface ISectionHeaderProps {
  title: string;
  subtitle: string;
  funnyText: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  funnyText,
  className,
}: ISectionHeaderProps) {
  return (
    <React.Fragment>
      <header className={className}>
        <h2 className={className}>{title}</h2>
        <h3 className={className}>{subtitle}</h3>
        <h4 className={className}>{funnyText}</h4>
      </header>
    </React.Fragment>
  );
}
