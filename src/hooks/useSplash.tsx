import { useEffect, useState } from 'react';

export default function useSplash(duration: number) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return { isSplashVisible };
}
