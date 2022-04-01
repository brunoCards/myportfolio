import React from "react";
import Box from "../Box/index";

import {
  CustomFooter,
  CustomFooterContainer,
  CustomFooterSubTitle,
  CustomFooterFunnyText,
} from "./styles";

import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
  ArrowUpNowIcon,
} from "../Icons/styles";

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
  return (
    <React.Fragment>
      <CustomFooter>
        <CustomFooterContainer>
          <Box className="icons__box__center">
            <LinkedInIcon />
            <GithubIcon />
            <MailIcon />
          </Box>
          <Box className="footer__text__box">
            <CustomFooterSubTitle>{subtitle}</CustomFooterSubTitle>
            <CustomFooterFunnyText>{funnyText}</CustomFooterFunnyText>
          </Box>
        </CustomFooterContainer>
        <Box className="upnow__button__box">
          <ArrowUpNowIcon />
        </Box>
      </CustomFooter>
    </React.Fragment>
  );
}
