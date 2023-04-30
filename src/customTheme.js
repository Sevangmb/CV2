import { deepmerge } from '@mui/utils';
import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';

const muiTheme = extendMuiTheme({
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
const customTheme = deepmerge(muiTheme);
export default customTheme;
