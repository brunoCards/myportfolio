import React from "react";

import { CustomForm, CustomInput } from "./styles";
import Button from "../../ui/components/Button/index";

interface FormularyProps {
  className?: string;
}

export default function Formulary({ className }: FormularyProps) {
  return (
    <React.Fragment>
      <CustomForm className={className}>
        <CustomInput name="name" type="text" placeholder="Nome" />
        <CustomInput name="email" type="email" placeholder="Email" />
        <CustomInput name="whatsapp" type="text" placeholder="Whatsapp" />
        <Button text="Enviar" />
      </CustomForm>
    </React.Fragment>
  );
}
