import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { loginStore } from "../../store";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchView from "../search";

export default function Header() {
  const userState = useRecoilValue(loginStore);

  return (
    <Container>
      <HeaderTitle to="/">
        <FontAwesomeIcon style={{ marginRight: 7 }} icon={["fab", "spotify"]} />
        Tagify
      </HeaderTitle>

      <RightContainer>
        <SearchView />
        {userState.imageSrc ? (
          <UserCard>
            <UserImage src={userState.imageSrc} />
            <UserName>{userState.username}</UserName>
          </UserCard>
        ) : (
          <Login href="http://localhost:8888/login">Login</Login>
        )}
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
  color: #9680a4;
  text-decoration: none;
`;

const RightContainer = styled.section`
  display: flex;
  align-items: center;
`;

const Login = styled.a`
  color: #e2deea;
  text-decoration: none;
`;

const UserName = styled.section`
  padding: 0 0.5em;
`;

const UserCard = styled.section`
  display: flex;
  align-items: center;
  border-radius: 2em;
  font-weight: 700;
  color: #9680a4;
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const Container = styled.header`
  color: #e4e0dd;
  background-color: #5d5174;
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
