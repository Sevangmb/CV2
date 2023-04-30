import { CssVarsProvider } from '@mui/joy/styles';
import customTheme from '../customTheme';

export default function About() {
  return (
    <CssVarsProvider theme={customTheme}>
      <h2>About</h2>
    </CssVarsProvider>
  );
}
