import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { useRecoilState } from "recoil";
import { loginState } from "../../store";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSelector from "../themeSelector";
import { logOutUser } from "../../spotify-functions";

interface Props {
  handleThemeSwitching: (theme: DefaultTheme) => void;
}

export default function UserView({ handleThemeSwitching }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [userState, setUserState] = useRecoilState(loginState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUserState(logOutUser);
    setAnchorEl(null);
  };

  return (
    <Container>
      {userState.imageSrc ? (
        <>
          <UserCard>
            <UserImage src={userState.imageSrc} />
            <UserName>{userState.username}</UserName>
          </UserCard>
          <EllipseContainer>
            <EllipseButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon="ellipsis-h" />
            </EllipseButton>
          </EllipseContainer>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem>
              <ThemeSelector handleThemeSwitching={handleThemeSwitching} />
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Login href="https://arcane-brushlands-65223.herokuapp.com/login">
          Login
        </Login>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: block;
`;

const EllipseContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const EllipseButton = styled.button`
  background: none;
  outline: none;
  padding: none;
  margin: none;
  border: none;
  color: ${(props) => props.theme.colors.light};
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
