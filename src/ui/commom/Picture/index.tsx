import React from "react";

interface IPictureProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export default function Picture({ src, alt, title, className }: IPictureProps) {
  return (
    <React.Fragment>
      <img src={src} alt={alt} title={title} className={className} />
    </React.Fragment>
  );
}
