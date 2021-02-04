import "styled-componets";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      ternary: string;
      background: string;
    };
  }
}
