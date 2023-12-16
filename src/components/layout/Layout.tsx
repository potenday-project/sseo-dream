import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="mx-auto max-w-3xl min-h-screen h-full bg-background-dark">
      <Outlet />
    </div>
  );
}
