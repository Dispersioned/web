import { ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/fonts/index'
import GlobalStyle from './style/global'
import theme from './style/theme'
import Home from './views/Home/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
