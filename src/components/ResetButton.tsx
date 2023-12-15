import ResetIcon from '../assets/icon-reset.svg';

type ResetButtonProps = {
  onClick: () => void;
};

function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={onClick}
        aria-label="reset-button"
        className="flex justify-center items-center p-[10px] bg-contentBackground rounded-[5px]"
      >
        <ResetIcon />
      </button>
    </div>
  );
}

export default ResetButton;
