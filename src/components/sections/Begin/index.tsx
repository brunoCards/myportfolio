import React from "react";

import Box from "../../../ui/commom/Box";
import Button from "../../../ui/commom/Button/index";
import Picture from "../../../ui/commom/Picture";
import QuaternaryTitle from "../../../ui/commom/Typography/QuaternaryTitle";
import SectionContainer from "../../../ui/commom/SectionContainer";
import Title from "../../../ui/commom/Typography/Title";

import Photo from "../../../assets/meAndBelinha__picture.png";
import Section from "../../../ui/commom/Section/index";
import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
} from "../../../ui/commom/Icons/styles";

export default function Begin() {
  return (
    <React.Fragment>
      <Section className="main__section">
        <SectionContainer>
          <Box>
            <Title text="E aí!" />
            <Box className="title-adjust__box">
              <Title text="Eu sou o" />
              <Title className="highlight" text="Bruno!" />
            </Box>
            <QuaternaryTitle text="e ela é a Belinha 🐶" />
          </Box>

          <Box className="picture__box">
            <Picture
              src={Photo}
              alt="Bruno Cardoso Dev e sua cadelinha Belinha"
            />
          </Box>
        </SectionContainer>

        <SectionContainer className="section-container__lg">
          <Box className="icons__box">
            <LinkedInIcon />
            <GithubIcon />
            <MailIcon />
          </Box>

          <Box className="button__box">
            <Button text="Dê uma olhadinha!" />
          </Box>
        </SectionContainer>
      </Section>
    </React.Fragment>
  );
}
