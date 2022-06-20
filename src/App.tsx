import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/fonts/index'
import GlobalStyle from './style/global'
import Home from './views/Home/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
