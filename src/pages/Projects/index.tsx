import React from "react";

import Section from "../../ui/components/Section/index";
import SectionHeader from "../../components/SectionHeader/index";
import GridCards from "../../components/GridCards/index";
import SectionFooter from "../../components/SectionFooter/index";

export default function Projects() {
  return (
    <React.Fragment>
      <Section className="no__padding">
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
