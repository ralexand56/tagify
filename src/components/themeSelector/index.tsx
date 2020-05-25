import React from "react";
import styled, { DefaultTheme } from "styled-components";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { themes } from "../../themes";

interface Props {
  handleThemeSwitching: (theme: DefaultTheme) => void;
}

export default function ThemeSelector({
  handleThemeSwitching,
}: React.PropsWithChildren<Props>) {
  const [currentTheme, setCurrentTheme] = React.useState(themes[0].name);

  return (
    <Container>
      <ToggleButtonGroup
        value={currentTheme}
        exclusive
        onChange={(e, val) => {
          const fndTheme = themes.find((x) => x.name === val);

          setCurrentTheme(val);
          fndTheme && handleThemeSwitching(fndTheme);
        }}
        aria-label="text alignment"
      >
        {themes.map((t) => (
          <ToggleButton key={t.name} value={t.name} aria-label="left aligned">
            <ColorSwatch style={{ backgroundColor: t.colors.dark }} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Container>
  );
}

const Container = styled.section``;

const ColorSwatch = styled.section`
  width: 20px;
  height: 20px;
  background-color: salmon;
  border-radius: 0.2em;
`;
