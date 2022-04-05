import React from "react";

import GridCards from "./GridCards";
import Section from "../../../ui/commom/Section";
import SectionHeader from "../../../ui/commom/SectionHeader";
import SectionFooter from "../../../ui/commom/SectionFooter";

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
