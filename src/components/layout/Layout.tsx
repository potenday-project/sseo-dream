import { Outlet } from 'react-router-dom';

import useSplash from '../../hooks/useSplash';

import HomePage from '../SplashScreen';

export default function Layout() {
  const { isSplashVisible } = useSplash(2500);

  return (
    <div className="relative mx-auto max-w-[428px] min-h-screen h-full bg-background-dark">
      {isSplashVisible && <HomePage />}
      <Outlet />
    </div>
  );
}
