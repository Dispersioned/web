import { ThemeProvider } from '@mui/material';

import './styles/composed.css';
import { theme } from './theme';

export function App() {
  return <ThemeProvider theme={theme}>app</ThemeProvider>;
}
