import styled from "styled-components";

export const CustomSection = styled.section`
  width: 100%;
  height: 92.4375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  &.main__section {
    height: 70.375rem;
  }
`;

export const CustomSectionWrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  &.no__padding {
    width: 100%;
  }
`;
