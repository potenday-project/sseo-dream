import { useEffect } from 'react';
import Title from '../shared/title/Title';
import PurposeList from '../purpose/PurposeButtons';
import { useLetterStore } from '../../stores/letter';

type Step1Props = {
  onClickNext: () => void;
};

export default function Step1({ onClickNext }: Step1Props) {
  const { resetLetterStore } = useLetterStore();

  useEffect(() => {
    resetLetterStore();
  }, [resetLetterStore]);

  return (
    <>
      <Title sequenceShown={false}>어떤 목적으로 글을 써드릴까요?</Title>
      <PurposeList onClickNext={onClickNext} />
    </>
  );
}
