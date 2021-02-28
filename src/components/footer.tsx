import styled from "@emotion/styled";
import { getYear } from "date-fns";
import { ExactTheme } from "src/logic/styles";

export function Footer() {
  const now = getYear(new Date());
  const years = now === 2021 ? now : `2021 - ${now}`;
  return (
    <Container>
      Copyright {years} © Nekoshita Yuki All rights reserved.
    </Container>
  );
}

const Container = styled.footer<{ theme: ExactTheme }>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  padding: 1rem 0;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.muted};
`;
