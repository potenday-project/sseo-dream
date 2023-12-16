import { useState } from 'react';

import { useLetterStore } from '../../stores/letter';

import PrevNextButtons from '../PrevNextButtons';
import ValueList from '../ValueList';
import SentenceAlert from '../setence-length/SentenceAlert';
import Title from '../shared/title/Title';
import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import { StepProps } from './types';

const SENTENCE_LENGTH_DATA = [
  {
    id: 1,
    title: '짧은 글',
    description: '100자',
    length: 100,
  },
  {
    id: 2,
    title: '중간 글',
    description: '200자',
    length: 200,
  },
  {
    id: 3,
    title: '긴 글',
    description: '300자',
    length: 300,
  },
];

export default function Step6({ onClickPrev, onClickNext }: StepProps) {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const description = '~' + SENTENCE_LENGTH_DATA.map((data) => data.description).join('/ ~');
  const valueList = SENTENCE_LENGTH_DATA.map((data) => data.title);

  const handleClickNext = () => {
    setIsOpenAlert(true);
  };
  const handleClickAlertClose = () => {
    setIsOpenAlert(false);
  };
  const handleClickAlertConfirm = () => {
    setIsOpenAlert(false);
    onClickNext();
  };

  return (
    <>
      <MediumCategoryWrapper>
        <Title sequence={5} sequenceShown>
          <div>어느정도 길이로 써드릴까요?</div>
          <div className="font-light text-sm">{description}</div>
        </Title>
        <ValueList valueList={valueList} selectionKey="sentenceLength" />
        <PrevNextButtons onClickNext={handleClickNext} onClickPrev={onClickPrev} />
      </MediumCategoryWrapper>
      {isOpenAlert && (
        <SentenceAlert onClose={handleClickAlertClose} onConfirm={handleClickAlertConfirm} />
      )}
    </>
  );
}
