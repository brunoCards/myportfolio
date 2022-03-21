import styled from "styled-components";

export const CustomGridCardsContainer = styled.div`
  width: auto;
  height: auto;
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const CustomCard = styled.div`
  width: 25rem;
  height: 27rem;
  padding: 2rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--quaternary__purple);
`;
