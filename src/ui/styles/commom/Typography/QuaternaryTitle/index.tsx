import React from "react";

import { CustomQuaternaryTitle } from "./styles";

interface IQuaternaryTitleProps {
  text?: string;
  className?: string;
}

export default function QuaternaryTitle({
  className,
  text,
}: IQuaternaryTitleProps) {
  return (
    <React.Fragment>
      <CustomQuaternaryTitle className={className}>
        {text}
      </CustomQuaternaryTitle>
    </React.Fragment>
  );
}
