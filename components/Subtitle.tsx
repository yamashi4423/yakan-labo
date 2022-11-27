import styled from "@emotion/styled";
import React from "react";

const SubtitleContainer = styled.div``;
const SubtitleContent = styled.div`
  color: #7895b2;
  font-size: 1.3rem;
  padding: 1rem 0;
`;

function Subtitle({ content }: { content: string }) {
  return (
    <SubtitleContainer>
      <SubtitleContent>{content}</SubtitleContent>
    </SubtitleContainer>
  );
}

export default Subtitle;
