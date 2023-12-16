import { PropsWithChildren } from 'react';

type Button = {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
};

export default function FooterButton({
  children,
  className,
  onClick,
  isActive = false,
  disabled = false,
}: PropsWithChildren<Button>) {
  const classes = {
    default:
      'w-full mx-2 py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white',
    custom: className ?? '',
    isActive: 'bg-primary text-font-light',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={` ${className ? classes.custom : classes.default} ${
        isActive && classes.isActive
      }`}>
      {children}
    </button>
  );
}
