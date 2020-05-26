import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";
import SearchView from "../search";
import Logo from "../logo";
import UserView from "../userView";

interface Props {
  handleThemeSwitching: (theme: DefaultTheme) => void;
}

export default function Header({ handleThemeSwitching }: Props) {
  return (
    <Container>
      <HeaderTitle to="/">
        <Logo width="30" />
        <span style={{ fontSize: "1.3em" }}>Tagify</span>
      </HeaderTitle>
      <Link to="/tags">Tags</Link>
      <RightContainer>
        <SearchView />
        <UserView handleThemeSwitching={handleThemeSwitching} />
      </RightContainer>
    </Container>
  );
}

const HeaderTitle = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;
`;

const RightContainer = styled.section`
  display: flex;
  align-items: center;
`;

const Container = styled.header`
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.dark};
  padding: 1em;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1.2px 2px rgba(0, 0, 0, 0.02),
    0 2.9px 4.9px rgba(0, 0, 0, 0.028), 0 5.4px 9.3px rgba(0, 0, 0, 0.035),
    0 9.6px 16.5px rgba(0, 0, 0, 0.042), 0 18px 30.9px rgba(0, 0, 0, 0.05),
    0 43px 74px rgba(0, 0, 0, 0.07);
`;
