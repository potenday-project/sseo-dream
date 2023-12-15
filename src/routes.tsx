import { RouteObject } from 'react-router-dom';

import Layout from './components/Layout';

import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
];

export default routes;
