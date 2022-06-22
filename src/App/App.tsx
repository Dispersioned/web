import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import '../assets/fonts/index'
import Router from '../router/Router'
import GlobalStyle from './style/global'
import theme from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
