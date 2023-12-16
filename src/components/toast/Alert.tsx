import Portal from '../../Portal';

import { useToastStore } from '../../stores/toast';

import Toast from '../shared/toast';

import IconSuccess from '../../assets/icon-success.svg';
import IconWarning from '../../assets/icon-warning.svg';
import IconError from '../../assets/icon-error.svg';

const alertIconSelector = (iconType: 'success' | 'warning' | 'error') => {
  const iconTypes = {
    success: <IconSuccess />,
    warning: <IconWarning />,
    error: <IconError />,
  };

  return iconTypes[iconType];
};

export default function Alert() {
  const { isShow, message, type } = useToastStore((state) => state);

  const alertIcon = alertIconSelector(type);

  return (
    <Portal>
      {isShow && (
        <Toast
          className={`mx-5 px-3 py-4 absolute left-0 right-0 bottom-[20px] rounded-lg bg-${type}-wrapper animate-fadeInOut z-50`}>
          <div className="flex items-center">
            <Toast.AlertIcon className="mr-2">{alertIcon}</Toast.AlertIcon>
            <div className="flex flex-col items-start">
              <Toast.Title className={`text-[14px] text-center text-${type}-color font-bold`}>
                {message.title}
              </Toast.Title>
              <Toast.Desc className={`text-[12px] text-center text-${type}-color`}>
                {message.desc}
              </Toast.Desc>
            </div>
          </div>
        </Toast>
      )}
    </Portal>
  );
}
