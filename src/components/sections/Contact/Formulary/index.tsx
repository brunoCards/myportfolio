import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../../../../ui/commom/Button/index";
import { CustomForm, CustomInput } from "./styles";

interface IFormularyProps {
  className?: string;
  name?: string;
  email?: string;
  whatsApp?: string;
}

export default function Formulary({
  className,
  name,
  email,
  whatsApp,
}: IFormularyProps) {
  const { register, handleSubmit } = useForm<IFormularyProps>();

  const handleOnSubmit: SubmitHandler<IFormularyProps> = (data) =>
    console.log(data);

  return (
    <React.Fragment>
      <CustomForm onSubmit={handleSubmit(handleOnSubmit)} className={className}>
        <CustomInput
          name="name"
          type="text"
          placeholder="Nome"
          {...register("name")}
        />

        <CustomInput
          name="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <CustomInput
          name="whatsApp"
          type="text"
          placeholder="Whatsapp"
          {...register("whatsApp")}
        />

        <Button type="submit" text="Enviar" />
      </CustomForm>
    </React.Fragment>
  );
}
