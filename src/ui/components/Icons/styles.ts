import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
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
