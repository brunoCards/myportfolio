import React from "react";

import Box from "../../../ui/components/Box";
import Picture from "../../../ui/components/Picture";
import Section from "../../../ui/components/Section";
import SectionHeader from "../../SectionHeader";

import Paragraph from "../../../ui/components/Typography/Paragraph";
import TertiaryTitle from "../../../ui/components/Typography/TertiaryTitle";

import Photo from "../../../assets/whoAmi__picture.png";

import {
  LinkedInIcon,
  GithubIcon,
  MailIcon,
} from "../../../ui/components/Icons/styles";

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
              text="Sou Bruno, tenho 29 anos e a tecnologia sempre esteve presente nos
              momentos mais felizes da minha vida, tenho o prazer de poder conviver
              com ela desde meus primeiros anos de vida através dos video-games
              que os meus irmãos mais velhos jogavam e eu ficava olhando (morrendo de
              vontade de jogar, rs). Sou natural de São Paulo, e no ano de 2019 me
              casei e hoje moro em São João del Rei - MG, cidade pacata e acolhedora,
              alem de muito simples, tudo que alguém precisa pra sobreviver bem e poder
              desenvolver projetos sem preocupações de cidade grande.
              Sou formado em Gestão de TI, foi onde através do professor Edson tive
              a minha primeira linha de código escrita em portugol, com o passar do
              tempo eu me interessei pelo assunto e fui pedir orientação pro professor
              onde eu poderia buscar cursos ou conteúdo sobre programação, ele me indicou
              de cara o Gustavo Guanabara, que foi onde através do curso de HTML do curso
              em video que fiz minhas primeiras telas e daí nunca mais parei, há 2 anos
              fiz uma transição de carreira e concluí o bootcamp da Labenu uma escola de
              programação, o curso foi voltado ao total em Javascript, React no front e
              Node no Back, 2 meses depois de concluir o curso recebi meu primeiro sim
              como dev júnior, e agora hoje vivo em busca de novos aprendizados e sempre
              buscando mais para me tornar o mais especialista possível."
            />
          </Box>
        </Box>
      </Section>
    </React.Fragment>
  );
}
