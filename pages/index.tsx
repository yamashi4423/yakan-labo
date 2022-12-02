import styled from "@emotion/styled";
import Head from "next/head";
import Article from "../components/articles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

export default function Home() {
  return (
    <Main>
      <Title content="やかん研へようこそ" />
      <Article>
        <Subtitle content="やかん研について" />
        <p>どうもこんにちは，やかん研の「やかん」です</p>
        <p>このページは私が何か作ったものとかを公開するページになっています</p>
        <p>
          ぷよぐやみんぐのおべんきょうについてはまだ1年も経っていないです，なにかコミュニティとか入りたいとかおもてます
        </p>
        {/* <p>ここに，つくったものを入れる</p> */}
      </Article>

      <Article>
        <Subtitle content="すきなツール" />
        <ul>
          <li>react</li>
          <li>emotion (css-in-js)</li>
          <li>python</li>
        </ul>
        <p>など</p>
      </Article>

      <Article>
        <Subtitle content="そのほか" />
        <p>
          なにか同じようなことをやっている方などいましたらtwitterなどでDMしてもらえたらうれしいです
        </p>
        <p>
          一応
          <a href="https://mypage3-59637.web.app/">こちら</a>
          が私のホームページですが，正直お試しで作ったものなので全然動いていません
        </p>
        {/* <p>ここにTwitter</p> */}
      </Article>
    </Main>
  );
}
