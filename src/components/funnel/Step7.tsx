import { useEffect } from 'react';
import useLetter from '../../hooks/useLetter';
import { useLetterStore } from '../../stores/letter';
import Loader from '../Loader';
import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import useToast from '../../hooks/useToast';

export default function Step7() {
  const { data, postUserData, status } = useLetter();
  const { userSelectionResult, setGeneratedLetterContents } = useLetterStore();
  const { onShowToast } = useToast();

  useEffect(() => {
    postUserData(userSelectionResult);
  }, []);

  useEffect(() => {
    if (status === 'error') {
      // FIXME: 이전 페이지로 이동
      onShowToast({ title: '알수 없는 에러가 발생했습니다.', desc: '' }, 'error');
    }
    if (status === 'complete') {
      // FIXME: 결과 페이지로 이동
      setGeneratedLetterContents([
        {
          content: data ?? '',
          isActive: true,
        },
      ]);
    }
  }, [status]);

  return (
    <MediumCategoryWrapper>
      <div className="relative min-h-screen">
        <Loader />
      </div>
    </MediumCategoryWrapper>
  );
}
