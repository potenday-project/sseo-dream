import { useEffect } from 'react';

import { useToastStore } from '../stores/toast';

export default function useToast() {
  const { isShow, showToast, hideToast } = useToastStore((state) => state);

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3_000);

      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [isShow, hideToast]);

  return {
    onShowToast: showToast,
  };
}
