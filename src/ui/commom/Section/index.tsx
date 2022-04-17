import React from "react";

interface ISectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: ISectionProps) {
  return (
    <React.Fragment>
      <section id={id} className={className}>
        <div className={className}>{children}</div>
      </section>
    </React.Fragment>
  );
}
