import React from "react";

import LogoImage from "../../assets/brunoCardosoDev__logo.png";

import Paragraph from "../../ui/commom/Typography/Paragraph";

import {
  handleGoToBegin,
  handleGoToAbout,
  handleGoToProjects,
  handleGoToContact,
} from "../../utils/sectionNavigators";

import headerStyles from "../../ui/styles/Header/Header.module.css";

export default function MainHeader() {
  return (
    <React.Fragment>
      <header className={headerStyles.defaultHeader}>
        <div className={headerStyles.headerContainer}>
          <div className={headerStyles.containerBox}>
            <img
              className={headerStyles.logo}
              src={LogoImage}
              alt="Logomarca que é representada por um par de chaves e no centro das chaves tem elipses, na frente o nome Bruno Cardoso Dev, Dev é a abreviação de Developer"
            />
          </div>

          <div className={headerStyles.containerBox}>
            <nav className={headerStyles.navigationMainMenu}>
              <ul className={headerStyles.mainMenuList}>
                {/* Inicio */}
                <li className={headerStyles.mainMenuListItem}>
                  <a
                    className={headerStyles.mainMenuLink}
                    onClick={() => handleGoToBegin()}
                  >
                    <Paragraph
                      className={headerStyles.paragraph}
                      text="Início"
                    />
                  </a>
                </li>

                {/* Sobre */}
                <li className={headerStyles.mainMenuListItem}>
                  <a
                    className={headerStyles.mainMenuLink}
                    onClick={() => handleGoToAbout()}
                  >
                    <Paragraph
                      className={headerStyles.paragraph}
                      text="Sobre"
                    />
                  </a>
                </li>

                {/* Projetos */}
                <li className={headerStyles.mainMenuListItem}>
                  <a
                    className={headerStyles.mainMenuLink}
                    onClick={() => handleGoToProjects()}
                  >
                    <Paragraph
                      className={headerStyles.paragraph}
                      text="Projetos"
                    />
                  </a>
                </li>

                {/* Contato */}
                <li className={headerStyles.mainMenuListItem}>
                  <a
                    className={headerStyles.mainMenuLink}
                    onClick={() => handleGoToContact()}
                  >
                    <Paragraph
                      className={headerStyles.paragraph}
                      text="Contato"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
