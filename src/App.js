import { CssVarsProvider } from '@mui/joy/styles';
import { Link as RouterLink } from 'react-router-dom';
import JoyLink from '@mui/joy/Link';
import { Fragment } from 'react';
import { customTheme } from './customTheme';


export default function App() {
  return (
    <CssVarsProvider theme={customTheme}>
      <Fragment>
        <JoyLink component={RouterLink} to="/Invoices">
          [Invoices]
        </JoyLink>
        <JoyLink component={RouterLink} to="/Expenses">
          [Expenses]
        </JoyLink>
      </Fragment>
    </CssVarsProvider>
  );
}