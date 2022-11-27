import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Title from "./Title";

const Wrapper = styled.div`
  width: 100%;
`;

function Layout({ children }: any) {
  return (
    <Wrapper>
      <Head>
        <link
          rel="icon"
          sizes="648x648"
          href="/public/favicons/favicon.png"
        ></link>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
