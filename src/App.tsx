import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/fonts/index'
import GlobalStyle, { Wrapper } from './style/global'
import Home from './views/Home/Home'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={} />
        <Route path="/experience" element={} />
        <Route path="/bio" element={} /> */}
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
