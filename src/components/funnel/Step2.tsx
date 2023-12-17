import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';
import { useLetterStore } from '../../stores/letter';

const WORKING_VALUE_LIST = [
  '기념일/명절',
  '인사/안부',
  '축하/감사',
  '안내/공지',
  '요청/제안',
  '문의/답변',
  '사과/수습',
  '그외',
];

const PERSONAL_VALUE_LIST = [
  '기념일/명절',
  '인사/안부',
  '축하/감사',
  '위로/응원',
  '사과/반성',
  '그외',
];

export default function Step2({ onClickPrev, onClickNext }: StepProps) {
  const { purpose } = useLetterStore.getState().userSelectionResult;

  let VALUE_LIST: string[];

  if (purpose === '업무') {
    VALUE_LIST = WORKING_VALUE_LIST;
  } else if (purpose === '개인') {
    VALUE_LIST = PERSONAL_VALUE_LIST;
  } else {
    VALUE_LIST = ['그외'];
  }

  return (
    <MediumCategoryWrapper>
      <Title sequence={1} sequenceShown>
        어떤 글을 써드릴까요?
      </Title>
      <ValueList valueList={VALUE_LIST} selectionKey="type" etcValue="그외 어떤 글을 써드릴까요?" />
      <PrevNextButtons selectionKey="type" onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </MediumCategoryWrapper>
  );
}
