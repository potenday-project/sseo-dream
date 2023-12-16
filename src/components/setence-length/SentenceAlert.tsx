import Alert from '../shared/alert';
import IconConfirm from '../../assets/icon-confirm.svg';

type SentenceAlertProps = {
  onClose: () => void;
  onConfirm: () => void;
};

function SentenceAlert({ onClose, onConfirm }: SentenceAlertProps) {
  return (
    <Alert onClose={onClose}>
      <div className="w-[240px] h-[270px] px-[20px] py-[24px]">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center gap-[10px] pt-[31px]">
            <div>
              <IconConfirm />
            </div>
            <div>이렇게 글을 써드릴까요?</div>
          </div>
          <button
            onClick={onConfirm}
            className="w-full py-[10px] text-center rounded-md font-bold whitespace-nowrap cursor-pointer bg-primary text-invert text-base">
            확인
          </button>
        </div>
      </div>
    </Alert>
  );
}

export default SentenceAlert;
