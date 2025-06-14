import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      white: string;
      black: string;
    };
    font: {
      base: string;
      weights: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
