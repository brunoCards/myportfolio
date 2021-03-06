import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiMaterialui,
  SiGit,
} from "react-icons/si";

import styled from "styled-components";

export const LinkedInIcon = styled(GrLinkedinOption)`
  width: 2rem;
  height: 2rem;

  color: var(--golden__yellow);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
    transform: scale(0.7);
  }
`;

export const GithubIcon = styled(GrGithub)`
  width: 2rem;
  height: 2rem;

  color: var(--golden__yellow);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
    transform: scale(0.7);
  }
`;

export const MailIcon = styled(GrMail)`
  width: 2rem;
  height: 2rem;

  color: var(--golden__yellow);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
    transform: scale(0.7);
  }
`;

export const ArrowUpNowIcon = styled(BsFillArrowUpCircleFill)`
  width: 4rem;
  height: 4rem;

  color: var(--primary__purple);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
    transform: scale(0.7);
  }
`;

export const HtmlShielIcon = styled(SiHtml5)`
  width: 2rem;
  height: 2rem;

  color: var(--orange__html);
`;

export const Css3ShielIcon = styled(SiCss3)`
  width: 2rem;
  height: 2rem;

  color: var(--blue__css3);
`;

export const JsShielIcon = styled(SiJavascript)`
  width: 2rem;
  height: 2rem;

  color: var(--yellow__js);
`;

export const ReactShielIcon = styled(SiReact)`
  width: 2rem;
  height: 2rem;

  color: var(--blue__reactjs);
`;

export const StyledComponentsShielIcon = styled(SiStyledcomponents)`
  width: 2rem;
  height: 2rem;

  color: var(--white__100);
`;

export const MaterialUiShielIcon = styled(SiMaterialui)`
  width: 2rem;
  height: 2rem;

  color: var(--blue__materialui);
`;

export const GitShielIcon = styled(SiGit)`
  width: 2rem;
  height: 2rem;

  color: var(--orange__git);
`;
