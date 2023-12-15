import { RouteObject } from 'react-router-dom';

import Layout from './components/Layout';

import MainPage from './pages/MainPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
];

export default routes;
