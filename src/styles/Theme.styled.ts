import {
  DefaultTheme,
  FontSize,
  Colors,
  Weights,
  Font,
  BreakPoints,
  Shadows,
  Variables,
} from "styled-components";

interface ThemeBasisType {
  fontSize: FontSize;
  weights: Weights;
  font: Font;
  breakPoints: BreakPoints;
  variables: Variables;
  shadows: Shadows;
  colors: Colors;
}

export const ThemeBasis: ThemeBasisType = {
  fontSize: {
    heading: "3.4rem",
    headingSmall: "2.6rem",
    subHeading: "2rem",
    base: "1.6rem",
    textSmall: "1.2rem",
  },

  colors: {
    bgColor: "hsl(0, 0%, 100%)",
    textColor: "rgba(0,0,0,1)",
    orange: "hsl(26, 100%, 55%)",
    paleOrange: "hsl(25, 100%, 94%)",
    darkBlue: "hsl(220, 13%, 13%)",
    grayishBlue: "hsl(220, 14%, 75%)",
    lightGrayishBlue: "hsl(223, 64%, 98%)",
    white: "hsl(0, 0%, 100%)",
    black: "rgba(0,0,0,1)",
    blackLight: "rgba(0,0,0,0.75)",
  },

  weights: {
    regullar: 400,
    bold: 700,
  },

  font: {
    primary: "'Kumbh Sans', sans-serif",
  },

  breakPoints: {
    "desktop-large": "120em", //1920px
    desktop: "80em", //1280px
    tablet: "60em", //960px
    phone: "42.5em", //680px
    "phone-small": "30em", //480px
  },

  shadows: {
    small: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    medium: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    large: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },

  variables: {
    "container-width": "1200px",
  },
};

const ThemeModeDark: Colors = {
  ...ThemeBasis.colors,
  bgColor: "rgba(0,0,0,1)",
  textColor: "hsl(0, 0%, 100%)",
};

const ThemeModeLight: Colors = {
  ...ThemeBasis.colors,
  bgColor: "hsl(0, 0%, 100%)",
  textColor: "rgba(0,0,0,1)",
};

const DarkTheme: DefaultTheme = {
  ...ThemeBasis,
  colors: ThemeModeDark,
};

const LightTheme: DefaultTheme = {
  ...ThemeBasis,
  colors: ThemeModeLight,
};

export { DarkTheme, LightTheme };
