import { PropsWithChildren } from 'react';

type ToastProps = {
  className: string;
};

function ToastMain({ children, className }: PropsWithChildren<ToastProps>) {
  return <div className={className}>{children}</div>;
}

function ToastAlertIcon({ children, className }: PropsWithChildren<ToastProps>) {
  return <div className={className}>{children}</div>;
}

function ToastTitle({ children, className }: PropsWithChildren<ToastProps>) {
  return <h1 className={className}>{children}</h1>;
}

function ToastDesc({ children, className }: PropsWithChildren<ToastProps>) {
  return <span className={className}>{children}</span>;
}

const Toast = Object.assign(ToastMain, {
  AlertIcon: ToastAlertIcon,
  Title: ToastTitle,
  Desc: ToastDesc,
});

export default Toast;
