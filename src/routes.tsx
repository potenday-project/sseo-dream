import { RouteObject } from 'react-router-dom';

import MainPage from './pages/MainPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];

export default routes;
