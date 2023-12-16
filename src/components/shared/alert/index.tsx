import { PropsWithChildren } from 'react';

import IconClose from '../../../assets/icon-close.svg';

type AlertProps = PropsWithChildren<{
  onClose: () => void;
}>;

function Alert({ children, onClose }: AlertProps) {
  return (
    <div className="fixed left-0 top-0 flex items-center justify-center p-[10px] w-full h-full bg-[#000] bg-opacity-70">
      <div className="relative bg-contentBackground rounded-[10px]">
        <button className="absolute top-0 right-0 p-[12px]" onClick={onClose}>
          <IconClose />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Alert;
