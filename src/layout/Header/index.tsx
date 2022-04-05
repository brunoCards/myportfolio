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
                  <CustomMainMenuLink href="#begin">
                    <Paragraph text="Início" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Sobre */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink href="#about">
                    <Paragraph text="Sobre" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Projetos */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink href="#projects">
                    <Paragraph text="Projetos" />
                  </CustomMainMenuLink>
                </CustomMainMenuItem>

                {/* Contato */}
                <CustomMainMenuItem>
                  <CustomMainMenuLink href="#contact">
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
