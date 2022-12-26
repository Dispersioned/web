import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import './styles/composed.css';
import { theme } from './theme';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
