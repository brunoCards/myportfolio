import React from "react";
import Box from "../../ui/commom/Box";
import Icons from "../../ui/commom/Icons/index";

import {
  CustomFooter,
  CustomFooterContainer,
  CustomFooterSubTitle,
  CustomFooterFunnyText,
} from "./styles";

import { ArrowUpNowIcon } from "../../ui/commom/Icons/styles";

interface MainFooterProps {
  subtitle?: string;
  funnyText?: string;
  className?: string;
}

export default function MainFooter({
  subtitle,
  funnyText,
  className,
}: MainFooterProps) {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <CustomFooter>
        <CustomFooterContainer>
          <Icons className="icons__box__center" />

          <Box className="footer__text__box">
            <CustomFooterSubTitle>{subtitle}</CustomFooterSubTitle>
            <CustomFooterFunnyText>{funnyText}</CustomFooterFunnyText>
          </Box>
        </CustomFooterContainer>
        <Box className="upnow__button__box">
          <ArrowUpNowIcon onClick={() => handleScrollToTop()} />
        </Box>
      </CustomFooter>
    </React.Fragment>
  );
}
