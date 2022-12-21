import styled from "@emotion/styled";
import React from "react";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
const TitleContent = styled.div`
  color: var(--header-color);
  font-size: 1.7rem;
  letter-spacing: 0.4rem;
`;
function Title({ content }: { content: string }) {
  return (
    <TitleContainer>
      <TitleContent>{content}</TitleContent>
    </TitleContainer>
  );
}

export default Title;
