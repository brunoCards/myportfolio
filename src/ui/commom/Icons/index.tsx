//#region react
import React from "react";
//#endregion

//#region ui commom components
import Box from "../Box";
//#endregion

//#region internal styled-components
import { LinkedInIcon, GithubIcon, MailIcon, ArrowUpNowIcon } from "./styles";
//#endregion

//#region toasts
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
//#endregion

interface ICustomIconsProps {
  onClick?: () => void;
  className?: string;
}

export default function Icons({ className, onClick }: ICustomIconsProps) {
  function handleNavigateToOutsideSite(url: string): void {
    window.open(url, "_blank");
  }

  function handleToMailTo(): void {
    window.location.href = `mailto:bruno.cards27@gmail.com`;
  }

  function handleCopyTo(): void {
    navigator.clipboard.writeText("bruno.cards27@gmail.com");

    toast.success("Email copiado para a área de transferência!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  return (
    <React.Fragment>
      <Box className={className}>
        <LinkedInIcon
          onClick={() =>
            handleNavigateToOutsideSite(
              "https://www.linkedin.com/in/-bruno-cardoso-/"
            )
          }
        />
        <GithubIcon
          onClick={() =>
            handleNavigateToOutsideSite("https://github.com/brunoCards")
          }
        />

        <MailIcon onClick={handleCopyTo} />
      </Box>
    </React.Fragment>
  );
}
