import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  indicator: {
    // change the default border radius to 0
    borderRadius: 0,
    backgroundColor: "indigo",
  },
  colors: {
    gray: {
      100: "#dee0df",
      300: "#a9abaa",
      500: "#747575",
    },
    indigo: {
      500: "#6366F1",
      700: "#4338ca",
      800: "#3730a3",
      900: "#1e1b4b",
    },
  },
  config,
});

export default theme;
