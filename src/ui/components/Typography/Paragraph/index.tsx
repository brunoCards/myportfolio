import React from "react";
import { CustomParagraph } from "./styles";

interface ParagraphProps {
  text?: string;
  className?: string;
}

export default function Paragraph({ className, text }: ParagraphProps) {
  return (
    <React.Fragment>
      <CustomParagraph className={className}>{text}</CustomParagraph>
    </React.Fragment>
  );
}
