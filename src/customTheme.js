import { deepmerge } from "@mui/utils";
import { extendTheme } from "@mui/joy/styles";
import { experimental_extendTheme as extendMuiTheme } from "@mui/material/styles";

const muiTheme = extendMuiTheme({
  palette: {
    background: {
      default: "#f4f6ff",
    },
    primary: {
      main: "#4f8a8b",
    },
    secondary: {
      main: "#ffcb74",
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const joyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: "#2DA44E",
          solidHoverBg: "#2C974B",
          solidActiveBg: "#298E46",
        },
        neutral: {
          outlinedBg: "#F6F8FA",
          outlinedHoverBg: "#F3F4F6",
          outlinedActiveBg: "rgba(238, 239, 242, 1)",
          outlinedBorder: "rgba(27, 31, 36, 0.15)",
        },
        focusVisible: "rgba(3, 102, 214, 0.3)",
      },
    },
  },

  palette: {
    background: {
      default: "#f4f6ff",
    },
    primary: {
      main: "#4f8a8b",
    },
    secondary: {
      main: "#ffcb74",
    },
  },

  focus: {
    default: {
      outlineWidth: "3px",
    },
  },
  fontFamily: {
    body: "roboto, system-ui, sans-serif",
  },
});


export const customTheme = deepmerge(muiTheme, joyTheme);
