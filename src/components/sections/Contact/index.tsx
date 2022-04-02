import React from "react";

import Formulary from "../../Formulary/index";
import Section from "../../../ui/components/Section/index";
import SectionHeader from "../../SectionHeader";

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
        <Formulary />
      </Section>
    </React.Fragment>
  );
}
