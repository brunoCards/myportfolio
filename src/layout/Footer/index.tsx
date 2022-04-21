//#region react
import React from "react";
//#endregion

//#region ui commom components
import Box from "../../ui/commom/Box";
import Icons from "../../ui/commom/Icons/index";
import { ArrowUpNowIcon } from "../../ui/commom/Icons/styles";
//#endregion

//#region css modules
import boxStyles from "../../ui/styles/commom/Box/Box.module.css";
import footerStyles from "../../ui/styles/Footer/Footer.module.css";
//#endregion

interface IMainFooterProps {
  subtitle?: string;
  funnyText?: string;
  className?: string;
}

export default function MainFooter({
  subtitle,
  funnyText,
  className,
}: IMainFooterProps) {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <footer className={footerStyles.default}>
        <div className={footerStyles.footerContainer}>
          <Icons className={boxStyles.iconsBoxCenter} />

          <Box className={boxStyles.footerTextBox}>
            <h3 className={footerStyles.footerSubTitle}>{subtitle}</h3>
            <h4 className={footerStyles.footerFunnyText}>{funnyText}</h4>
          </Box>
        </div>
        <Box className={boxStyles.upnowButtonBox}>
          <ArrowUpNowIcon onClick={() => handleScrollToTop()} />
        </Box>
      </footer>
    </React.Fragment>
  );
}
