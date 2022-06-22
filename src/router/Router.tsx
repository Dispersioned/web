import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Projects from '../components/Projects/Projects'
import Home from '../views/Home/Home'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}
export default Router
