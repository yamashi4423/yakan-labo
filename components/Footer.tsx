import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-color);
`;
const Container = styled.div``;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <>&copy;やかん</>
      </Container>
    </Wrapper>
  );
}

export default Footer;
