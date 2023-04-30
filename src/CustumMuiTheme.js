import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';

const CustumMuiTheme = extendMuiTheme({
  palette: {
    background: {
      default: '#f4f6ff',
    },
    primary: {
      main: '#4f8a8b',
    },
    secondary: {
      main: '#ffcb74',
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
export default CustumMuiTheme;
