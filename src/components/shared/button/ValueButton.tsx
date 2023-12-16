import { PropsWithChildren } from 'react';

type ValueButtonProps = {
  onClick: () => void;
  isActive: boolean;
};

export default function ValueButton({
  onClick,
  isActive,
  children,
}: PropsWithChildren<ValueButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex px-3.5 py-3 rounded-md text-lg font-bold ${
        isActive ? 'bg-primary text-font-light' : 'bg-contentBackground text-white'
      }`}>
      {children}
    </button>
  );
}
