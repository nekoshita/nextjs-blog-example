import { GetStaticPaths, GetStaticProps } from "next";
import { Link } from "src/components";
import { getPostAll, getPost, PostData } from "src/logic/models";
import { ExactTheme } from "src/logic/styles";
import styled from "@emotion/styled";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { Pre } from "src/components";
import Img from "react-optimized-image";
import { getYear, parseISO } from "date-fns";

interface Props {
  source: Parameters<typeof hydrate>[0];
  data: PostData;
  prevPostData: PostData | null;
  nextPostData: PostData | null;
}

export default function Post({
  source,
  data,
  prevPostData,
  nextPostData,
}: Props) {
  const components = getComponents(data);
  const content = hydrate(source, { components });
  return (
    <Container>
      <Title>{data.title}</Title>
      <Content>{content}</Content>

      <Navigator>
        {prevPostData && (
          <Link href={prevPostData.slug}>
            <a>{`← ${prevPostData.title}`}</a>
          </Link>
        )}
        <Spacer />
        {nextPostData && (
          <Link href={nextPostData.slug}>
            <a>{`${nextPostData.title} →`}</a>
          </Link>
        )}
      </Navigator>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-wrap: break-word;
  width: 100vw;
  max-width: 50rem;
`;

const Title = styled.h1<{ theme: ExactTheme }>`
  margin: 1rem;
  text-decoration: underline ${({ theme }) => theme.colors.accent};
`;

const Content = styled.div<{ theme: ExactTheme }>`
  margin-top: 1rem;

  > :not(pre) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Navigator = styled.div<{ theme: ExactTheme }>`
  display: flex;
  flex-direction: row;
  padding 1rem;

  a {
    ${({ theme }) => `
      text-decoration: underline;
      text-decoration-color: ${theme.colors.accent};
      font-weight: bold;
    `}
  }
`;

const Spacer = styled.div`
  margin: auto;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostAll().map((p) => ({
      params: {
        slug: p.data.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  if (typeof slug !== "string") {
    throw new Error("Duplicated title");
  }

  const { content, ...post } = getPost(slug);
  const components = getComponents(post.data);
  const source = await renderToString(content, { components });
  return {
    props: {
      source,
      ...post,
    },
  };
};

function getComponents(data: PostData) {
  return {
    pre: Pre,
    // eslint-disable-next-line react/display-name
    img: ({ src, ...props }: { src: string }) => {
      const year = getYear(parseISO(data.date));
      return (
        <Img
          {...props}
          src={require(`documents/contents/${year}/${data.date}/${src.replace(
            "./",
            ""
          )}`)}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
          sizes={[1920]}
        />
      );
    },
  };
}
