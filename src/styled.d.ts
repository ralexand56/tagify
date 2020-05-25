import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    dropShadow: string;
    borderRadius: string;
    colors: {
      dark: string;
      light: string;
      medium: string;
    };
  }
}
