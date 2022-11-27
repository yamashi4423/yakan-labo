import styled from "@emotion/styled";
import Main from "../components/Main";
import Title from "../components/Title";

const Wrapper = styled.div``;

function blog() {
  return (
    <Main>
      <Title content="ブログ" />
      <p>随時更新予定</p>
    </Main>
  );
}

export default blog;
