import React from 'react'
import './assets/fonts/index'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './views/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={} />
        <Route path="/experience" element={} />
        <Route path="/bio" element={} /> */}
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
