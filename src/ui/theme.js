import { createMuiTheme } from "@material-ui/core/styles";

const darkGrey = "#777777";

export const theme = createMuiTheme({
  palette: {
    dividerColor: "#FDC2CC",
    boxShadow: "#000000",
    common: {
      light: "#f0f5f9",
      dark: "#282c37",
      black: "#000",
      white: "#fff",
      extraLightBlue: "#C1E6FF",
      extraDarkBlue: "#067EED",
    },
    primary: {
      main: "#0E3854",
    },
    secondary: {
      main: "#FF7C1F",
    },
  },
  sectionHeaders: {
    textAlign: "center",
    fontFamily: "Almarai",
  },
  tab: {
    fontFamily: "Almarai",
  },
  buttonContainer: {
    borderRadius: 0,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  logoContainer: {
    paddingRight: "10px",
    height: "65px",
  },
  logo: {
    height: "60px",
    paddingLeft: "5px",
  },
  logoText: {
    fontWeight: 500,
    fontSize: "2rem",
  },

  overrides: {
    MuiInputBase: {
      root: {
        fontSize: "1.2rem",
        color: darkGrey,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
      },
    },
  },
});
