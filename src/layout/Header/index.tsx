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

interface MainHeaderProps {
  links?: string[];
}

export default function MainHeader({ links }: MainHeaderProps) {
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
                {links &&
                  links.map((link, index) => {
                    return (
                      <React.Fragment key={index}>
                        <CustomMainMenuItem>
                          <CustomMainMenuLink>{link}</CustomMainMenuLink>
                        </CustomMainMenuItem>
                      </React.Fragment>
                    );
                  })}
              </CustomMainMenu>
            </CustomNavigationMainMenu>
          </CustomContainerBox>
        </CustomHeaderContainer>
      </CustomHeader>
    </React.Fragment>
  );
}
