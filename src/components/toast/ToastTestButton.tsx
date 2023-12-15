import useToast from '../../hooks/useToast';

export default function ToastTestButton() {
  const { onShowToast } = useToast();

  const handleClickBtn = () => {
    const message = { title: '복사 성공했어요', desc: '' };

    onShowToast(message, 'success');
  };

  return (
    <div>
      <button type="button" onClick={handleClickBtn}>
        토스트 생성
      </button>
    </div>
  );
}
