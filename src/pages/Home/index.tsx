import React from "react";

import Box from "../../ui/components/Box";
import MainHeader from "../../ui/components/Header/index";
import Picture from "../../ui/components/Picture/index";
import Section from "../../ui/components/Section/index";
import SectionContainer from "../../ui/components/SectionContainer/index";
import Title from "../../ui/components/Typography/Title/";
import QuaternaryTitle from "../../ui/components/Typography/QuaternaryTitle/index";

import Photo from "../../assets/picture.png";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from "../../ui/components/Icons/styles";
import Button from "../../ui/components/Button";

export default function Home() {
  return (
    <React.Fragment>
      <MainHeader links={["Início", "Sobre mim", "Projetos", "Contato"]} />
      <Section className="home__section">
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
