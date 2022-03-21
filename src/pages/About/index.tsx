import React from "react";

import Box from "../../ui/components/Box/index";
import Picture from "../../ui/components/Picture";
import Section from "../../ui/components/Section/index";
import SectionHeader from "../../components/SectionHeader/index";

import Paragraph from "../../ui/components/Typography/Paragraph/index";
import TertiaryTitle from "../../ui/components/Typography/TertiaryTitle/index";

import Photo from "../../assets/whoAmi.png";

import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
} from "../../ui/components/Icons/styles";

export default function About() {
  return (
    <React.Fragment>
      <Section className="no__padding">
        <SectionHeader
          title="Eu
          Yo
          I
          Ef
          Aku
          Ich
          一世
          私"
          subtitle="Eu quero, eu posso, eu vou conseguir!"
          funnyText="Mentira, rs, só tá escrito “eu” em alguns idiomas! :)"
        />

        <Box className="about__box">
          <Box className="md__box">
            <Picture src={Photo} alt="foto redonda do Bruno" />

            <Box className="title__box">
              <TertiaryTitle text="Bruno da Cruz Cardoso" />
              <TertiaryTitle text="Dev Front-end" />
            </Box>

            <Box className="icons__box__sm">
              <LinkedInIcon />
              <GithubIcon />
              <MailIcon />
            </Box>
          </Box>

          <Box className="md__box pd-3">
            <TertiaryTitle className="start-text" text="Sobre mim" />
            <Paragraph
              className="justify-text"
              text="  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem including versions of Lorem Ipsum.   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem including versions of Lorem Ipsum."
            />
          </Box>
        </Box>
      </Section>
    </React.Fragment>
  );
}
