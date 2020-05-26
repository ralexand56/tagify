import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from "recoil";
import { loginState } from "../../store";

interface Props {

}

export default function UserView({}: React.PropsWithChildren<Props>) {
     const userState = useRecoilValue(loginState);
     
     return (
       <Container>
         {userState.imageSrc ? (
           <UserCard>
             <UserImage src={userState.imageSrc} />
             <UserName>{userState.username}</UserName>
           </UserCard>
         ) : (
           <Login href="https://arcane-brushlands-65223.herokuapp.com/login">
             Login
           </Login>
         )}
       </Container>
     );
}

const Container = styled.section`
`;

const Login = styled.a`
  color: ${(props) => props.theme.colors.light};
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
  color: ${(props) => props.theme.colors.light};
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 50px;
`;