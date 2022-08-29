import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Projects from '../../views/projects/Projects'
import Home from '../../views/home/Home'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/web" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate replace to="/web" />} />
      </Routes>
    </AnimatePresence>
  )
}
export default Router
