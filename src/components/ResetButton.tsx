import ResetIcon from '../assets/icon-reset.svg';

type ResetButtonProps = {
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ResetButton({ onClick, ...props }: ResetButtonProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={onClick}
        aria-label="reset-button"
        className="flex justify-center items-center p-[10px] bg-contentBackground rounded-[5px]"
        {...props}>
        <ResetIcon />
      </button>
    </div>
  );
}

export default ResetButton;
