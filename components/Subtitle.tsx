import styled from "@emotion/styled";
import React from "react";

const SubtitleContainer = styled.div``;
const SubtitleContent = styled.div`
  color: var(--header-color);
  font-size: 1.3rem;
  font-weight: bold;
`;

function Subtitle({ content }: { content: string }) {
  return (
    <SubtitleContainer>
      <SubtitleContent>{content}</SubtitleContent>
    </SubtitleContainer>
  );
}

export default Subtitle;
