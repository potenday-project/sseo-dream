import { RouteObject } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
];

export default routes;
