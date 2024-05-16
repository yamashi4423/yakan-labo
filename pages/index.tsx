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
      <Title content="中山研へようこそ" />
      <Article>
        <Subtitle content="中山研について" />
        <p>どうもこんにちは，中山研の中山です</p>
        <p>
          このページは私が何か作ったものとかを公開するページになっています。いわゆるポートフォリオサイトです。
        </p>
        <p></p>
        <p>中山研とは言っていますが、研究者でも何でもないです。学生です。</p>
        <p>
          エンジニアリングのおべんきょうをしています。何かコミュニティに入りてーです！
        </p>
      </Article>

      <Article>
        <Subtitle content="よく使う技術・ツール" />
        <ul>
          <li>フロント：React（Next.js）</li>
          <li>
            バックエンド：ほとんどやらないけど、flaskとLaravelは使ったことある。
          </li>
          <li>深層学習：Tensorflow多め。PyTorchときどき。</li>
          <li>インフラ：バイトでGCPを使う。AWSは触った程度。</li>
        </ul>
        <p>など</p>
      </Article>

      <Article>
        <Subtitle content="そのほか" />
        <p>
          なにか同じようなことをやっている方などいましたらtwitterなどでDMしてもらえたらうれしいです
        </p>
      </Article>
    </Main>
  );
}
