//#region react
import React from "react";
//#endregion

//#region internal components
import GridCards from "./GridCards";
//#endregion

//#region ui commons components
import Section from "../../../ui/commom/Section";
import SectionHeader from "../../../ui/commom/SectionHeader";
import SectionFooter from "../../../ui/styles/commom/SectionFooter";
//#endregion

export default function Projects() {
  return (
    <React.Fragment>
      <Section id="projects" className="no__padding">
        <SectionHeader
          title="Projetos 
          Proyectos 
          Projects 
          プロジェクト"
          subtitle="O projeto era impossível até que alguem foi lá e fez!"
          funnyText="Exato! Tudo isso ainda faz parte das minhas piadocas :)"
        />
        <GridCards />
        <SectionFooter>
          <span style={{ textDecoration: "line-through", opacity: 0.2 }}>
            Im
          </span>
          possível
        </SectionFooter>
      </Section>
    </React.Fragment>
  );
}
