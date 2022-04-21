//#region react
import React from "react";
//#endregion

//#region react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
//#endregion

//#region ui commom components
import Button from "../../../../ui/commom/Button/";
//#endregion

//#region css modules
import buttonStyles from "../../../../ui/styles/commom/Button/Button.module.css";
import formStyles from "./Formulary.module.css";
//#endregion

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
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={formStyles.defaultForm}
      >
        <input
          className={formStyles.defaultInput}
          name="name"
          type="text"
          placeholder="Nome"
          {...register("name")}
        />

        <input
          className={formStyles.defaultInput}
          name="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          className={formStyles.defaultInput}
          name="whatsApp"
          type="text"
          placeholder="Whatsapp"
          {...register("whatsApp")}
        />

        <Button type="submit" text="Enviar" className={buttonStyles.default} />
      </form>
    </React.Fragment>
  );
}
