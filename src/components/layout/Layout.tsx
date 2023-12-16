import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="mx-auto min-h-screen h-full max-w-3xl bg-background-dark">
      <Outlet />
    </div>
  );
}
