//#region react
import React from "react";
//#endregion

//#region internal components
import GridCards from "./GridCards";
//#endregion

//#region ui commons components
import Section from "../../../ui/commom/Section";
import SectionFooter from "../../../ui/commom/SectionFooter";
import SectionHeader from "../../../ui/commom/SectionHeader";
//#endregion

//#region css modules
import sectionFooter from "../../../ui/styles/commom/SectionFooter/SectionFooter.module.css";
import sectionHeader from "../../../ui/styles/commom/SectionHeader/SectionHeader.module.css";
import sectionStyles from "../../../ui/styles/commom/Section/Section.module.css";
//#endregion

export default function Projects() {
  return (
    <React.Fragment>
      <Section
        id="projects"
        className={`${sectionStyles.defaultSection} ${sectionStyles.noPadding} `}
      >
        <SectionHeader
          title="Projetos 
          Proyectos 
          Projects 
          プロジェクト"
          subtitle="O projeto era impossível até que alguem foi lá e fez!"
          funnyText="Exato! Tudo isso ainda faz parte das minhas piadocas :)"
          className={`${sectionHeader.defaultSectionHeader} ${sectionHeader.sectionHeaderTitle} ${sectionHeader.sectionHeaderSubTitle} ${sectionHeader.sectionHeaderFunnyText}`}
        />
        <GridCards />
        <SectionFooter
          className={`${sectionFooter.default} ${sectionFooter.sectionFooterText}`}
        >
          <span style={{ textDecoration: "line-through", opacity: 0.2 }}>
            Im
          </span>
          possível
        </SectionFooter>
      </Section>
    </React.Fragment>
  );
}
