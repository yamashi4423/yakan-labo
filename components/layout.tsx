import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Title from "./Title";

const Wrapper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
`;

function Layout({ children }: any) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
