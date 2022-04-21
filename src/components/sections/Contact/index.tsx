//#region react
import React from "react";
//#endregion

//#region internal components
import Formulary from "./Formulary";
//#endregion

//#region ui commons components
import Section from "../../../ui/commom/Section";
import SectionHeader from "../../../ui/commom/SectionHeader";
//#endregion

//#region css modules
import sectionStyles from "../../../ui/styles/commom/Section/Section.module.css";
import sectionHeaderStyles from "../../../ui/styles/commom/SectionHeader/SectionHeader.module.css";
//#endregion

export default function Contact() {
  return (
    <React.Fragment>
      <Section
        id="contact"
        className={`${sectionStyles.defaultSection} ${sectionStyles.noPadding} `}
      >
        <SectionHeader
          title="Entre em contato
          Contact
          接触
          Kontakte"
          subtitle="Só entrar em contato mesmo :)"
          funnyText="Quem ler aqui é uma pessoa muito legal! Obrigado pelo contato!"
          className={`${sectionHeaderStyles.defaultSectionHeader} ${sectionHeaderStyles.sectionHeaderTitle} ${sectionHeaderStyles.sectionHeaderSubTitle} ${sectionHeaderStyles.sectionHeaderFunnyText}`}
        />
        <Formulary />
      </Section>
    </React.Fragment>
  );
}
