import styled from "@emotion/styled";
import Main from "../components/Main";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const Wrapper = styled.div``;

function about() {
  return (
    <Main>
      <Title content="わたしについて" />
      <Subtitle content="なまえ" />
      <p>「やかん」です</p>
      <Subtitle content="身分" />
      <p>
        大学三年生です，就職したくないので大学院にいければいいなって思ってます
      </p>
      <Subtitle content="趣味" />
      <p>アニメとか漫画とか</p>
      <p>最近はHARTAコミックスと和山やまさんとかすきです</p>
    </Main>
  );
}

export default about;
