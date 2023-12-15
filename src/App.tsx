import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Alert from './components/toast/Alert';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Alert />
    </>
  );
}
