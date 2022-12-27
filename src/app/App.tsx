import { ThemeProvider } from '@mui/material';
import { Home } from 'views/home';

import './styles/composed.css';
import { theme } from './theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
