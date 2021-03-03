import styled from "@emotion/styled";
import { ExactTheme } from "src/logic/styles";

export function Profile() {
  return (
    <Container>
      <h2>猫下ゆうき</h2>
      <p>環境変数{process.env.NODE_ENV}</p>
      <p>フリーランスエンジニア・個人開発💻</p>
      <p>go言語、kubernetes、GCPが好きなバックエンドエンジニア</p>
      <p>
        週の半分くらい働いて、残りは個人でサービス開発しています。現在はタレントの情報を収集できるアプリ
        <a
          href="http://star-news.jp/links/app"
          target="_blank"
          rel="noreferrer"
        >
          スターニュース
        </a>
        を開発中
      </p>
    </Container>
  );
}

const Container = styled.div<{ theme: ExactTheme }>`
  margin: 0 0.5rem 2em;

  p {
    margin: 0;
  }

  a {
    text-decoration: underline ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;
