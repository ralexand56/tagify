import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Button from "@material-ui/core/Button";

interface Props {
  size?: "sm" | "md" | "lg";
  icon: IconProp;
  theme?: DefaultTheme;
  onClick?: (ev: React.MouseEvent) => any;
}

export default function StyledButton({
  icon,
  children,
  onClick,
}: React.PropsWithChildren<Props>) {
  // const theme = useTheme();
  // console.log(theme);
  return (
    <Container
      onClick={(e) => onClick && onClick(e)}
    >
      <ChildrenContainer>{children}</ChildrenContainer>
      {icon && <FontAwesomeIcon style={{ marginLeft: 7 }} icon={icon} />}
    </Container>
  );
}

const ChildrenContainer = styled.section`
  border-right: solid 1px;
  padding: 0 0.5em;
`;

const Container = styled(Button)`
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.dark};
  margin: 0.5em 0em;
  &:hover {
    background-color: #5469d4;
  }
`;
