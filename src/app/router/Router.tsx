import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Projects from '../../views/projects/Projects'
import Home from '../../views/home/Home'
import { ROUTES } from '../../shared/config/routes'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path="*" element={<Navigate replace to={ROUTES.home} />} />
      </Routes>
    </AnimatePresence>
  )
}
export default Router
