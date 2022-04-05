import React from "react";

import Box from "../../../ui/commom/Box";
import Button from "../../../ui/commom/Button";
import Icons from "../../../ui/commom/Icons";
import Photo from "../../../assets/meAndBelinha__picture.png";
import Picture from "../../../ui/commom/Picture";
import QuaternaryTitle from "../../../ui/commom/Typography/QuaternaryTitle";
import Section from "../../../ui/commom/Section";
import SectionContainer from "../../../ui/commom/SectionContainer";
import Title from "../../../ui/commom/Typography/Title";

export default function Begin() {
  function handleGoToProjects(): void {
    window.scrollTo({
      top: document.getElementById("projects").offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <React.Fragment>
      <Section id="begin" className="main__section">
        <SectionContainer>
          <Box>
            <Title text="E aí!" />
            <Box className="title-adjust__box">
              <Title text="Eu sou o" />
              <Title className="highlight" text="Bruno!" />
            </Box>
            <QuaternaryTitle text="e ela é a Belinha 🐶" />
          </Box>

          <Box className="picture__box">
            <Picture
              src={Photo}
              alt="Bruno Cardoso Dev e sua cadelinha Belinha"
            />
          </Box>
        </SectionContainer>

        <SectionContainer className="section-container__lg">
          <Icons className="icons__box" />
          <Box className="button__box">
            <Button
              onClick={() => handleGoToProjects()}
              text="Dê uma olhadinha!"
            />
          </Box>
        </SectionContainer>
      </Section>
    </React.Fragment>
  );
}
