import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme, ExactTheme } from "src/logic/styles";
import styled from "@emotion/styled";
import { Header, Head, Footer } from "src/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Container>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div<{ theme: ExactTheme }>`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100vw;
  font-family: ${({ theme }) => theme.fonts["body"]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: ${({ theme }) => theme.breakpoints[1]};
  }
`;
