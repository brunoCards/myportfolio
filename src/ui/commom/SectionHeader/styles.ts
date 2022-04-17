import styled from "styled-components";

export const CustomSectionHeader = styled.header`
  width: 100%;
  height: 13.1875rem;
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: var(--septenary__purple35);
`;

export const CustomSectionHeaderTitle = styled.h2`
  width: 100%;
  height: 5.625rem;
  line-height: 5.625rem;

  font-size: 4rem;
  font-weight: bold;
  color: var(--golden__yellow);
  text-align: center;

  opacity: 0.7;
`;

export const CustomSectionHeaderSubTitle = styled.h3`
  width: 100%;
  height: 2rem;
  line-height: 2rem;

  font-size: 1.5625rem;
  font-weight: bold;
  color: var(--primary__purple);
  text-align: center;
`;

export const CustomSectionFunnyText = styled.h4`
  width: 100%;
  height: 2rem;
  line-height: 2rem;

  font-size: 1rem;
  font-weight: bold;
  color: var(--primary__purple);
  text-align: center;
`;
