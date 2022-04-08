import React from "react";

import {
  CustomContainerBox,
  CustomHeader,
  CustomHeaderContainer,
  CustomNavigationMainMenu,
  CustomMainMenu,
  CustomMainMenuItem,
  CustomMainMenuLink,
  Logo,
} from "./styles";

import LogoImage from "../../assets/brunoCardosoDev__logo.png";
import Paragraph from "../../ui/commom/Typography/Paragraph";

import { handleGoToBegin } from "../../utils/handleGoToBegin";
import { handleGoToProjects } from "../../utils/handleGoToProjects";
import { handleGoToAbout } from "../../utils/handleGoToAbout";
import { handleGoToContact } from "../../utils/handleGoToContact";

export default function MainHeader() {
  return (
    <React.Fragment>
      <CustomHeader>
        <CustomHeaderContainer>
          <CustomContainerBox>
            <Logo src={LogoImage} alt="Bruno Cardoso Dev" />
          </CustomContainerBox>

          <CustomContainerBox>
            <CustomNavigationMainMenu>
              <CustomMainMenu>
                {/* Inicio */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink onClick={() => handleGoToBegin()}>
                    <Paragraph text="Início" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Sobre */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink onClick={() => handleGoToAbout()}>
                    <Paragraph text="Sobre" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Projetos */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink onClick={() => handleGoToProjects()}>
                    <Paragraph text="Projetos" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Contato */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink onClick={() => handleGoToContact()}>
                    <Paragraph text="Contato" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>
              </CustomMainMenu>
            </CustomNavigationMainMenu>
          </CustomContainerBox>
        </CustomHeaderContainer>
      </CustomHeader>
    </React.Fragment>
  );
}
