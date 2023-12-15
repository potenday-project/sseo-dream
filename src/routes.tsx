import { RouteObject } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
];

export default routes;
