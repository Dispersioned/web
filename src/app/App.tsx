import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import '../assets/fonts/index';
import { Router } from './router/Router';
import { GlobalStyleProvider } from './style/global';
import theme from './style/theme';

export function App() {
  return (
    <GlobalStyleProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalStyleProvider>
  );
}
