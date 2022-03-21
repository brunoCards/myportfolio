import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";

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
