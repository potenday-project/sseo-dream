import { useState } from 'react';

import { useLetterStore } from '../../stores/letter';

import PrevNextButtons from '../PrevNextButtons';
import ValueList from '../ValueList';
import HeaderTags from '../header/HeaderTags';
import SentenceAlert from '../setence-length/SentenceAlert';
import Title from '../shared/title/Title';
import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';

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

export default function Step6() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const { userSelectionResult, setUserSelectionResult } = useLetterStore();
  const description = '~' + SENTENCE_LENGTH_DATA.map((data) => data.description).join('/ ~');
  const valueList = SENTENCE_LENGTH_DATA.map((data) => data.title);

  const handleClickValue = (value: string) => {
    const sentenceLength = SENTENCE_LENGTH_DATA.find((data) => data.title === value)?.length ?? 100;
    setUserSelectionResult({ ...userSelectionResult, sentenceLength: sentenceLength });
  };

  const handleClickNext = () => {
    setIsOpenAlert(true);
    console.log('aa');
  };
  const handleClickAlertClose = () => {
    setIsOpenAlert(false);
  };
  const handleClickAlertConfirm = () => {
    setIsOpenAlert(false);
    // FIXME: loading 페이지로 이동
  };

  return (
    <>
      <MediumCategoryWrapper>
        {/*// FIXME: HeaderTags는 MediumCategoryWrapper 안에 있어야 함*/}
        <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
        <Title sequence={5} sequenceShown>
          <div>어느정도 길이로 써드릴까요?</div>
          <div className="font-light text-sm">{description}</div>
        </Title>
        <ValueList valueList={valueList} onClick={handleClickValue} />
        <PrevNextButtons
          disabledNext={!userSelectionResult.sentenceLength}
          onClickNext={handleClickNext}
        />
      </MediumCategoryWrapper>
      {isOpenAlert && (
        <SentenceAlert onClose={handleClickAlertClose} onConfirm={handleClickAlertConfirm} />
      )}
    </>
  );
}
