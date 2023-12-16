import { useEffect } from 'react';
import useLetter from '../../hooks/useLetter';
import { useLetterStore } from '../../stores/letter';
import Loader from '../Loader';
import useToast from '../../hooks/useToast';
import { StepProps } from './types';

export default function Step7({ onClickPrev, onClickNext }: StepProps) {
  const { data, postUserData, status } = useLetter();
  const { userSelectionResult, setGeneratedLetterContents } = useLetterStore();
  const { onShowToast } = useToast();

  useEffect(() => {
    postUserData(userSelectionResult);
  }, []);

  useEffect(() => {
    if (status === 'error') {
      onClickPrev();
      onShowToast({ title: '알수 없는 에러가 발생했습니다.', desc: '' }, 'error');
    }
    if (status === 'complete') {
      onClickNext();
      setGeneratedLetterContents([
        {
          content: data ?? '',
          isActive: true,
        },
      ]);
    }
  }, [status]);

  return (
    <div>
      <div className="relative min-h-screen">
        <Loader />
      </div>
    </div>
  );
}
