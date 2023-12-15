import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ToastState = {
  message: {
    title: string;
    desc: string;
  };
  type: 'success' | 'warning' | 'error';
  isShow: boolean;
  showToast: (message: ToastState['message'], type: ToastState['type']) => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    message: {
      title: '',
      desc: '',
    },
    type: 'success',
    isShow: false,
    showToast: (message, type) => {
      set((state) => ({ ...state, message, type, isShow: true }));
    },
    hideToast: () => set({ message: { title: '', desc: '' }, type: 'success', isShow: false }),
  })),
);
