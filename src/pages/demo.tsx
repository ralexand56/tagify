import React from "react";
import styled from "styled-components";

export default function Demo() {
  return (
    <Container>
      <Header>Header</Header>
      <Aside>Side Bar</Aside>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "aside main main"
    "footer footer footer";

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "header header header"
      "main main main"
      "footer footer footer";
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: magenta;
  color: white;
  padding: 1em;
`;

const Aside = styled.aside`
  grid-area: aside;
  background-color: yellow;
  padding: 1em;
  :hover {
    filter: blur(2px) brightness(50%);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Main = styled.main`
  grid-area: main;
  background-color: salmon;
  padding: 1em;
`;

const Footer = styled.main`
  grid-area: footer;
  background-color: #4cbb17;
  padding: 1em;
`;
