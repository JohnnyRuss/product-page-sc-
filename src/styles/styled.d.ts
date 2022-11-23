import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeMode {
    fontSize: FontSize;
    colors: Colors;
    weights: Weights;
    font: Font;
    breakPoints: BreakPoints;
    variables: Variables;
    shadows: Shadows;
  }

  export interface FontSize {
    heading: string;
    headingSmall: string;
    subHeading: string;
    base: string;
    textSmall: string;
  }

  export interface Colors {
    bgColor: string;
    textColor: string;
    orange: string;
    paleOrange: string;
    darkBlue: string;
    grayishBlue: string;
    lightGrayishBlue: string;
    white: string;
    black: string;
    blackLight: string;
  }

  export interface Weights {
    regullar: number;
    bold: number;
  }

  export interface Font {
    primary: string;
  }

  export interface BreakPoints {
    "desktop-large": string;
    desktop: string;
    tablet: string;
    phone: string;
    "phone-small": string;
  }

  export interface Shadows {
    small: string;
    medium: string;
    large: string;
  }

  export interface Variables {
    "container-width": string;
  }
}
