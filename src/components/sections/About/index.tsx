import React from "react";

import Box from "../../../ui/commom/Box";
import Icons from "../../../ui/commom/Icons";
import Paragraph from "../../../ui/commom/Typography/Paragraph";
import Photo from "../../../assets/whoAmi__picture.png";
import Picture from "../../../ui/commom/Picture";
import Section from "../../../ui/commom/Section";
import SectionHeader from "../../../ui/commom/SectionHeader";
import TertiaryTitle from "../../../ui/commom/Typography/TertiaryTitle";

import {
  Css3ShielIcon,
  GitShielIcon,
  HtmlShielIcon,
  JsShielIcon,
  MaterialUiShielIcon,
  ReactShielIcon,
  StyledComponentsShielIcon,
} from "../../../ui/commom/Icons/styles";

export default function About() {
  return (
    <React.Fragment>
      <Section id="about" className="no__padding">
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
            <Picture
              src={Photo}
              alt="Um homem de cor parda cabelo penteado vestido com um terno preto brilhante com barba no rosto sorrindo"
              title="Bruno de terno preto brilhante com barba no rosto sorrindo"
            />

            <Box className="title__box">
              <TertiaryTitle className="italic" text="Bruno da Cruz Cardoso" />
              <TertiaryTitle className="italic" text="Dev Front-end" />
            </Box>

            <Box className="techs__box">
              {/* <Box className="tech-title__box">
                <SecondaryTitle text="Tecnologias" />
              </Box> */}

              <Box className="tech__shields">
                <HtmlShielIcon />

                <Css3ShielIcon />

                <JsShielIcon />

                <ReactShielIcon />

                <StyledComponentsShielIcon />

                <MaterialUiShielIcon />

                <GitShielIcon />
              </Box>
            </Box>

            <Icons className="icons__box__sm" />
          </Box>

          <Box className="md__box pd-3">
            <Box className="title__box">
              <TertiaryTitle
                className="start-text section__paragraph-title"
                text="Sobre mim"
              />
            </Box>

            <Paragraph
              text="Sou Bruno, tenho 29 anos e a tecnologia sempre esteve presente nos
              momentos mais felizes da minha vida, tenho o prazer de poder conviver
              com ela desde meus primeiros anos de vida através dos video-games que os
              meus irmãos mais velhos jogavam e eu ficava olhando (morrendo de vontade
              de jogar, rs). Sou natural de São Paulo, e no ano de 2019 me casei e hoje
              moro em São João del Rei - MG, cidade pacata e acolhedora, alem de muito
              simples, tem tudo que alguém precisa pra sobreviver bem e poder desenvolver
              projetos sem preocupações de cidade grande. Sou formado em Gestão de TI, foi
              onde através do saudoso professor Edson tive a minha primeira linha de código
              escrita em portugol, com o passar do tempo eu me interessei pelo assunto e fui
              pedir orientação pro professor onde eu poderia buscar cursos ou conteúdo sobre
              programação, ele me indicou de cara o mestre Gustavo Guanabara (Curso em vídeo),
              que foi onde através do curso de HTML do curso em video que fiz minhas primeiras
              telas e daí nunca mais parei, há 2 anos fiz uma transição de carreira e concluí o
              bootcamp da Labenu uma escola de programação, o curso foi voltado ao total em Javascript,
              React no frontend e Node no backend, 2 meses depois de concluir o curso recebi meu primeiro
              sim como dev júnior, e agora hoje vivo em busca de novos aprendizados e sempre buscando mais
              para me tornar o mais especialista possível."
            />
          </Box>
        </Box>
      </Section>
    </React.Fragment>
  );
}
