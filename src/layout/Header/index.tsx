//#region react
import React, { useEffect, useState } from "react";
//#endregion

//#region custom hooks
import { useAnchorsNavigation } from "../../hooks/useAnchorsNavigation";
//#endregion

//#region assets
import LogoImage from "../../assets/brunoCardosoDev__logo.png";
//#endregion

//#region ui commons components
import Paragraph from "../../ui/commom/Typography/Paragraph";
//#endregion

//#region css modules
import headerStyles from "../../ui/styles/Header/Header.module.css";
//#endregion

export default function MainHeader() {
  const {
    handleGoToAbout,
    handleGoToBegin,
    handleGoToContact,
    handleGoToProjects,
  } = useAnchorsNavigation();

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    function handleChangeNavbarBackgroundColor() {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener("scroll", handleChangeNavbarBackgroundColor);
  }, []);

  return (
    <React.Fragment>
      <header
        className={
          navbar
            ? `${headerStyles.defaultHeader} ${headerStyles.active}`
            : `${headerStyles.defaultHeader}`
        }
      >
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
                    onClick={handleGoToBegin}
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
                    onClick={handleGoToAbout}
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
                    onClick={handleGoToProjects}
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
                    onClick={handleGoToContact}
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
