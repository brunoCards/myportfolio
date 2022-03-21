import React from "react";
import { CustomImage } from "./styles";

interface PictureProps {
  src: string;
  alt: string;
}

export default function Picture({ src, alt }: PictureProps) {
  return (
    <React.Fragment>
      <CustomImage src={src} alt={alt} />
    </React.Fragment>
  );
}
