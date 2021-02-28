import { Link } from "src/components";
import { IoMdSunny, IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { useTheme, ExactTheme } from "src/logic/styles";
import styled from "@emotion/styled";
import { useCallback } from "react";
import { accounts } from "src/logic/sns";

export function Header() {
  const { theme, setColorMode } = useTheme();

  const toggleColorMode = useCallback(() => {
    setColorMode((mode) => (mode === "default" ? "dark" : "default"));
  }, []);

  return (
    <Container>
      <Link href="/">
        <Logo>Nekoshita Blog</Logo>
      </Link>

      <Right>
        <a href={accounts.twitter.link} target="_blank" rel="noreferrer">
          <IconContainer>
            <IoLogoTwitter size={28} color={theme.colors.twitterBlue} />
          </IconContainer>
        </a>
        <a href={accounts.github.link} target="_blank" rel="noreferrer">
          <IconContainer>
            <IoLogoGithub size={28} color={theme.colors.muted} />
          </IconContainer>
        </a>

        <button onClick={toggleColorMode}>
          <IconContainer>
            <IoMdSunny size={28} color={theme.colors.muted} />
          </IconContainer>
        </button>
      </Right>
    </Container>
  );
}

const Container = styled.header<{ theme: ExactTheme }>`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
`;

const Logo = styled.div<{ theme: ExactTheme }>`
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  letter-spacing: 0.2em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div<{ theme: ExactTheme }>`
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin: 0 0.5rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
