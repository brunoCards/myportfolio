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

export default function Contact() {
  return (
    <React.Fragment>
      <Section className="no__padding">
        <SectionHeader
          title="Entre em contato
          Contact
          接触
          Kontakte"
          subtitle="Só entrar em contato mesmo :)"
          funnyText="Quem ler aqui é uma pessoa muito legal! Obrigado pelo contato!"
        />
      </Section>
    </React.Fragment>
  );
}
