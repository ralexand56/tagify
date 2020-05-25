import { DefaultTheme } from "styled-components";

const baseTheme = {
  borderRadius: "0.5rem",
  dropShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07)`,
};

export const greenTheme: DefaultTheme = {
  ...baseTheme,
  name: "Green",
  colors: {
    dark: "#506b63",
    light: "#d8e6cb",
    medium: "hsl(162, 15%, 30%)",
  },
};

export const blueTheme: DefaultTheme = {
  ...baseTheme,
  name: "Blue",
  colors: {
    dark: "#3D6B9B",
    light: "#B2C8E6",
    medium: "hsl(211, 44%, 35%)",
  },
};

export const purpleTheme: DefaultTheme = {
  ...baseTheme,
  name: "Purple",
  colors: {
    dark: "#5d5174",
    light: "#cdc5db",
    medium: "#9680a4",
  },
};

export const solarTheme: DefaultTheme = {
  ...baseTheme,
  name: "Solar",
  colors: {
    dark: "#002B36",
    light: "#A9BDBD",
    medium: "##073642",
  },
};

export const themes: DefaultTheme[] = [
  solarTheme,
  blueTheme,
  greenTheme,
  purpleTheme,
];
