import styled from "styled-components";

export const CustomFooter = styled.footer`
  width: 100%;
  height: 21rem;
  border-top: 0.1rem solid var(--secondary__purple);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomFooterContainer = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomContainerBox = styled(CustomFooterContainer)`
  width: 50%;
`;

export const CustomFooterSubTitle = styled.h3`
  width: 100%;
  height: 2rem;
  line-height: 2rem;

  font-size: 1.5625rem;
  font-weight: bold;
  color: var(--primary__purple);
  text-align: center;
`;

export const CustomFooterFunnyText = styled.h4`
  width: 100%;
  height: 2rem;
  line-height: 2rem;

  font-size: 1rem;
  font-weight: bold;
  color: var(--primary__purple);
  text-align: center;
`;
