import NextLink from "next/link";
import { LinkProps } from "next/link";
import styled from "@emotion/styled";

export function Link(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Container>
      <NextLink {...props} />
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
`;
