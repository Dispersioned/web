import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { Home } from 'views/home';

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path="*" element={<Navigate replace to={ROUTES.home} />} />
    </Routes>
  );
}
