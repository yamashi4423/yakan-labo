import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  padding-bottom: 2rem;
`;

function Article({ children }: any) {
  return <Container>{children}</Container>;
}

export default Article;
