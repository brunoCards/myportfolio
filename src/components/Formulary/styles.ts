import styled from "styled-components";

export const CustomForm = styled.form`
  width: 80%;
  height: auto;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 7.3125rem;
  padding: 0 0 0 2rem;
  border: 0.1rem solid var(--primary__purple);
  border-radius: 1rem;

  display: flex;
  align-items: center;

  font-size: 1.25rem;
  font-weight: bold;
  color: var(--primary__purple);

  background-color: transparent;
`;
