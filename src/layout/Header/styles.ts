import styled from "styled-components";

export const CustomHeader = styled.header`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomHeaderContainer = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CustomContainerBox = styled(CustomHeaderContainer)`
  width: 50%;
`;

export const Logo = styled.img`
  width: 17, 8125rem;
  height: 5rem;
  margin-left: 8rem;

  object-fit: cover;
`;

export const CustomNavigationMainMenu = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomMainMenu = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

export const CustomMainMenuItem = styled.li`
  height: 20%;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: var(--tertiary__purple);
  }
`;

export const CustomMainMenuLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: var(--white-100);
`;
