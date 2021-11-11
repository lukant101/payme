import { DarkTheme, DefaultTheme as LightTheme } from "react-native-paper";

// Extend 'react-native-paper' ThemeColors type
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      black: string;
      grey: {
        base: string;
        light: string;
        lightest: string;
      };
      transparent: string;
      white: string;
    }

    /*interface Theme {
      myOwnProperty: boolean;
    }*/
  }
}

const colorPrimary = "#219ebc";

/** Shared theme colors (typically literals) */
const sharedColors = {
  black: "#000000",
  // TODO: Figure out how to handle grey colors per theme!
  grey: {
    base: "#999999",
    light: "#cdcdcd",
    lightest: "#dedede",
  },
  transparent: "transparent",
  white: "#ffffff",
};

/** Light theme colors */
const lightColors = {
  ...LightTheme.colors,
  ...sharedColors,
  primary: colorPrimary,
  background: "#efefef",
};

/** Dark theme colors */
const darkColors = {
  ...DarkTheme.colors,
  ...sharedColors,
  primary: colorPrimary,
};

const darkTheme = {
  ...DarkTheme,
  colors: darkColors,
};

const lightTheme = {
  ...LightTheme,
  colors: lightColors,
};

export { darkColors, darkTheme, lightColors, lightTheme, sharedColors };
