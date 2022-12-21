import styled from "@emotion/styled";
import React from "react";
import Title from "./Title";

const MainContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 1rem;
  @media (min-width: 580px) {
    padding: 2rem;
  }
  @media (min-width: 980px) {
    padding: 2rem;
    margin: 0 auto;
  }
`;
const MainArticle = styled.div`
  color: #000000;
  a {
    color: var(--sub-color);
    text-decoration: underline;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

function Main({ children }: any) {
  return (
    <MainContainer>
      <MainArticle>{children}</MainArticle>
    </MainContainer>
  );
}

export default Main;
