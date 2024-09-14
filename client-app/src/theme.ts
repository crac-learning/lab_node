import { extendTheme } from "@mui/material/styles";

// Extend the Palette interface
declare module "@mui/material/styles" {
  interface Palette {
    gradient: string;
    primaryShades: {
      [key: string]: string;
    };
    secondaryShades: {
      [key: string]: string;
    };
  }
  interface BreakpointOverrides {
    xs: true;
    xxsm: true;
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface PaletteOptions {
    gradient?: string;
    primaryShades?: {
      [key: string]: string;
    };
    secondaryShades?: {
      [key: string]: string;
    };
  }
}

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#0C0635",
          light: "#555172",
          dark: "#0B0530",
        },
        primaryShades: {
          200: "rgba(85, 81, 114, 0.16)",
          300: "#3D385D",
          400: "#241F49",
          700: "#0A052A",
          800: "#080425",
        },
        secondary: {
          main: "#01E538",
          light: "#E6FFEC",
          dark: "#017F1F",
        },
        secondaryShades: {
          100: "#B3FFC5",
          200: "#80FE9F",
          300: "#4DFE78",
          400: "#1AFE51",
          600: "#01B22B ",
          700: "#004C13",
          800: "#001906",
        },
        info: {
          lightChannel: "#1CB0F6",
          light: "#79AEFF",
          main: "#1F78FF",
          dark: "#1960CC",
          darkChannel: "#1654B3",
        },
        error: {
          lightChannel: "#D88090",
          light: "#CF6679",
          main: "#C0334D",
          dark: "#B00020",
          darkChannel: "#B81936",
        },
        action: {
          active: "#01E538",
          hover: "#1AFE51",
          selected: "#01B22B",
          disabledBackground: "#80FE9F",
          disabled: "#FFFFFF",
        },
        warning: {
          main: "#FFCD29",
        },
        text: {
          primary: "#D7D8D7",
          secondary: "#555172",
          disabled: "#555172",
        },
        gradient:
          "linear-gradient(14.68deg, rgba(36, 31, 73, 0.4) 13.25%, rgba(25, 19, 65, 0.4) 85.73%)",
        background: {
          default: "#FFFFFF",
          //   paper: "#241F49",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "GlitchInside",
      "Montserrat",
      "Gemunu Libre",
      "gilroy400",
      "gilroy500",
      "gilroy600",
      "gilroy700",
      "gilroy800",
      "sans-serif",
    ].join(","),
    subtitle1: {
      fontFamily: "GlitchInside",
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: "GlitchInside",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
      fontWeight: 600,
    },
  },
});
