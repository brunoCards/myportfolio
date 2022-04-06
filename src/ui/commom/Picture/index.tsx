import React from "react";
import { CustomImage } from "./styles";

interface IPictureProps {
  src: string;
  alt: string;
}

export default function Picture({ src, alt }: IPictureProps) {
  return (
    <React.Fragment>
      <CustomImage src={src} alt={alt} />
    </React.Fragment>
  );
}
