import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { Home } from 'views/home';
import { Projects } from 'views/projects';

export function Router() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path="*" element={<Navigate replace to={ROUTES.home} />} />
      </Routes>
    </AnimatePresence>
  );
}
