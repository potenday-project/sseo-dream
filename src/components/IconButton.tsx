import ResetIcon from '../assets/icon-reset.svg';
import CloseIcon from '../assets/icon-close.svg';

const ICONS = {
  reset: ResetIcon,
  close: CloseIcon,
} as const;

type ResetButtonProps = {
  onClick: () => void;
  icon: 'reset' | 'close';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function IconButton({ onClick, icon, ...props }: ResetButtonProps) {
  const Icon = ICONS[icon];
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={onClick}
        aria-label="reset-button"
        className="flex justify-center items-center w-[38px] h-[38px] bg-contentBackground rounded-[5px] disabled:bg-disabled disabled:cursor-not-allowed"
        {...props}>
        <Icon />
      </button>
    </div>
  );
}

export default IconButton;
