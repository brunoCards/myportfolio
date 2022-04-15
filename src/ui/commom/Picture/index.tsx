import React from "react";
import { CustomImage } from "./styles";

interface IPictureProps {
  src: string;
  alt: string;
  title: string;
}

export default function Picture({ src, alt, title }: IPictureProps) {
  return (
    <React.Fragment>
      <CustomImage src={src} alt={alt} title={title} />
    </React.Fragment>
  );
}
