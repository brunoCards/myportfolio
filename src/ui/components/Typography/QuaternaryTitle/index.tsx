import React from "react";

import { CustomQuaternaryTitle } from "./styles";

interface QuaternaryTitleProps {
  text?: string;
  className?: string;
}

export default function QuaternaryTitle({
  className,
  text,
}: QuaternaryTitleProps) {
  return (
    <React.Fragment>
      <CustomQuaternaryTitle className={className}>
        {text}
      </CustomQuaternaryTitle>
    </React.Fragment>
  );
}
