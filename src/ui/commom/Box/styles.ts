import styled from "styled-components";

export const CustomBox = styled.div`
  width: 60%;

  display: flex;
  justify-content: flex-end;

  flex-direction: column;

  &.picture__box {
    width: 40%;

    justify-content: center;
    align-items: center;
  }

  &.title-adjust__box {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }

  &.icons__box {
    width: 70%;
    height: 60%;

    padding-left: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }

  &.icons__box__sm {
    width: 40%;
    height: 30%;
    padding: 0 1rem 1.5rem 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 1.5rem;
  }

  &.icons__box__center {
    width: 100%;
    height: 7rem;
    padding-left: 8rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
  }

  &.button__box {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &.about__box {
    width: 80%;
    height: 50%;
    border-radius: 1rem;
    margin-top: 4rem;

    display: flex;
    flex-direction: row;

    background: rgba(90, 24, 154, 0.25);
    box-shadow: 0 0.5rem 2rem 0 rgba(31, 38, 135, 0.65);
    backdrop-filter: blur(1.5rem);
  }

  &.md__box {
    width: 50%;
    height: 100%;
    padding-top: 2rem;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  &.title__box {
    width: 100%;
    height: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  &.techs__box {
    width: 35%;
    height: 25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &.tech-title__box {
    width: 100%;
    height: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &.tech__shields {
    width: 80%;
    height: 8rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  &.pd-3 {
    padding: 3rem;
  }

  &.footer__text__box {
    width: 85%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  &.upnow__button__box {
    width: 10%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
