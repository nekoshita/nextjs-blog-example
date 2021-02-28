import { Link } from "src/components";
import styled from "@emotion/styled";
import { format, parseISO } from "date-fns";
import { elevation, ExactTheme } from "src/logic/styles";
import { PostData } from "src/logic/models";

export function Posts({ posts }: { posts: PostData[] }) {
  console.log(posts);
  return (
    <Container>
      {posts.map((p) => (
        <Link key={p.title} href={`/blog/${p.slug}`}>
          <Article>
            <ImageWrapper>
              <Image src={p.thunmailUrl} />
            </ImageWrapper>
            <Data>
              <Title>{p.title}</Title>
              <Date>{format(parseISO(p.date), "yyyy年MM月dd日")}</Date>
            </Data>
          </Article>
        </Link>
      ))}
    </Container>
  );
}

const pageVerticalPadding = "2rem";

const Container = styled.div`
  padding: 0 ${pageVerticalPadding};
`;

const Article = styled.article<{ theme: ExactTheme }>`
  margin: 2rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  &:hover {
    > div:first-of-type {
      box-shadow: ${elevation[3]};
      transform: translateY(-0.1rem);
    }
  }

  flex-direction: row;
`;

const Data = styled.div<{ theme: ExactTheme }>`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3<{ theme: ExactTheme }>`
  text-decoration: underline ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const Date = styled.p<{ theme: ExactTheme }>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
`;

const ImageWrapper = styled.div<{ theme: ExactTheme }>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.iconBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  margin-right: 1rem;
`;

const Image = styled.div<{ src: string; theme: ExactTheme }>`
  align-self: center;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  background: center / cover no-repeat url(${(props) => props.src});
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${elevation[4]};

  transition: 0.25s var(--ease-in-out-quad);
`;
