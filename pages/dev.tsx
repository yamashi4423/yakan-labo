import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Title from "../components/Title";

const Wrapper = styled.div``;

function dev() {
  return (
    <Main>
      <Title content="つくったもの" />
      <p>随時更新予定</p>
    </Main>
  );
}

export default dev;
