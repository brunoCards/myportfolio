import React from "react";
import Box from "../Box/index";

import {
  CustomFooter,
  CustomFooterContainer,
  CustomFooterSubTitle,
  CustomFooterFunnyText,
} from "./styles";

import { LinkedInIcon, GithubIcon, MailIcon } from "../Icons/styles";

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
          <Box>
            <CustomFooterSubTitle>{subtitle}</CustomFooterSubTitle>
            <CustomFooterFunnyText>{funnyText}</CustomFooterFunnyText>
          </Box>
        </CustomFooterContainer>
      </CustomFooter>
    </React.Fragment>
  );
}
