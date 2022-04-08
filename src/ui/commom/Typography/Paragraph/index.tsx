import React from "react";
import { CustomParagraph } from "./styles";

interface IParagraphProps {
  text?: string;
  className?: string;
}

export default function Paragraph({ className, text }: IParagraphProps) {
  return (
    <React.Fragment>
      <CustomParagraph className={className}>{text}</CustomParagraph>
    </React.Fragment>
  );
}
