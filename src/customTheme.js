import { deepmerge } from '@mui/utils';
import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';

const muiTheme = extendMuiTheme({
  palette: {
    background: {
      default: '#f4f6ff',
    },
    primary: {
      main: '#00796b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff5722',
      contrastText: '#ffffff',
    },
  },
  spacing: 8,
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
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
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
const customTheme = deepmerge(muiTheme);
export default customTheme;