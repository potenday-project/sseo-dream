import { PropsWithChildren } from 'react';

type Button = {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export default function FooterButton({
  children,
  className,
  onClick,
  isActive = false,
}: PropsWithChildren<Button>) {
  const classes = {
    default:
      'w-full mx-2 py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-neutral-700 text-white',
    custom: className ?? '',
    isActive: 'bg-yellow-200 text-zinc-500',
  };

  return (
    <div
      className={`${className ? classes.custom : classes.default} ${isActive && classes.isActive}`}>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
