import Main from "../../components/Main";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Article from "../../components/articles";

export default function Blog20221221() {
  return (
    <Main>
      <Title content="ずんだもんにはまっていること" />
      <Article>
        <Subtitle content="ずんだもんって？" />
        <p>皆さんはずんだもんを知っていますか？</p>
        <p>
          VOICEVOXという音声合成ソフト？のひとつで，ちょっと前までYoutubeで流行ってたやつです．私はほんとつい最近知ったのですが，声がかわいいのでずっとみちゃってます
        </p>
        <p>
          <a href="https://zunko.jp/con_voice.html">公式サイト</a>によると，
        </p>
        <blockquote>
          <p>
            「ずんだアロー」に変身できる。ずんだ餅の精。「ずんだアロー」に変身することができる。
          </p>
          <p>やや不幸属性が備わっており、ないがしろにされることもしばしば。</p>
        </blockquote>
        <p>とのこと．</p>
        <p>
          巷ではずんだもんを酷い目に合わせることが流行ってしまっていたそうですが，私はただただかわいいずんだもんをずっと見ていたい派です
        </p>
        <p>
          ずんだもん（VOICEVOX）は無料で使えるので自分で好きなことを言わせるのも楽しいです．
          「大学の授業だるいのだ」とか「FXで有り金ぜんぶ溶かすのだ」とか言わせることができます！
        </p>
      </Article>
      <Article>
        <Subtitle content="参考サイト" />
        <ul>
          <li>
            公式サイト「キャラクターボイスを使う」https://zunko.jp/con_voice.html
          </li>
        </ul>
      </Article>
    </Main>
  );
}
