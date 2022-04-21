//#region react
import React from "react";
//#endregion

//#region custom hooks
import { useAnchorsNavigation } from "../../../hooks/useAnchorsNavigation";
//#endregion

//#region ui commons components
import Box from "../../../ui/commom/Box";
import Button from "../../../ui/commom/Button";
import Icons from "../../../ui/commom/Icons";
import QuaternaryTitle from "../../../ui/commom/Typography/QuaternaryTitle";
import Picture from "../../../ui/commom/Picture";
import Section from "../../../ui/commom/Section";
import SectionContainer from "../../../ui/commom/SectionContainer";
import Title from "../../../ui/commom/Typography/Title";
//#endregion

//#region assets
import Photo from "../../../assets/meAndBelinha__picture.png";
import BgVideo from "../../../assets/bg_video.mp4";
//#endregion

//#region css modules
import boxStyles from "../../../ui/styles/commom/Box/Box.module.css";
import buttonStyles from "../../../ui/styles/commom/Button/Button.module.css";
import pictureStyles from "../../../ui/styles/commom/Picture/Picture.module.css";
import quaternaryStyles from "../../../ui/styles/commom/Typography/QuaternaryTitle/Quaternary.module.css";
import sectionStyles from "../../../ui/styles/commom/Section/Section.module.css";
import sectionContainerStyles from "../../../ui/styles/commom/SectionContainer/SectionContainer.module.css";
import titleStyles from "../../../ui/styles/commom/Typography/Title/Title.module.css";
import videoStyles from "../../../ui/styles/Video/Video.module.css";
//#endregion

export default function Begin() {
  const { handleGoToProjects } = useAnchorsNavigation();

  return (
    <React.Fragment>
      <Section id="begin" className={sectionStyles.mainSection}>
        <div className={sectionStyles.overlay} />
        <video
          src={BgVideo}
          autoPlay
          loop
          muted
          className={videoStyles.default}
        />

        <div className={sectionStyles.mainSectionWrapper}>
          <SectionContainer className={sectionContainerStyles.sectionContainer}>
            <Box className={boxStyles.defaultBox}>
              <Title className={titleStyles.defaultTitle} text="E aí!" />
              <Box className={boxStyles.titleAdjustBox}>
                <Title className={titleStyles.defaultTitle} text="Eu sou o" />
                <Title
                  className={`${titleStyles.defaultTitle} ${titleStyles.highlight}`}
                  text="Bruno!"
                />
              </Box>
              <QuaternaryTitle
                className={quaternaryStyles.defaultQuaternaryTitle}
                text="e ela é a Belinha 🐶"
              />
            </Box>

            <Box className={boxStyles.pictureBox}>
              <Picture
                src={Photo}
                alt="Um homem de cor parda cabelo baixo com barba no rosto segurando
              em seu colo sua cadelinha de cor branca com manchas marrom"
                title="Bruno e Belinha"
                className={pictureStyles.defaultImage}
              />
            </Box>
          </SectionContainer>

          <SectionContainer
            className={sectionContainerStyles.sectionContainerLg}
          >
            <Icons className={boxStyles.iconsBox} />
            <Box className={boxStyles.buttonBox}>
              <Button
                onClick={handleGoToProjects}
                text="Dê uma olhadinha!"
                className={buttonStyles.default}
              />
            </Box>
          </SectionContainer>
        </div>
      </Section>
    </React.Fragment>
  );
}
