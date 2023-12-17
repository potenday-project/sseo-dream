import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';
import { useLetterStore } from '../../stores/letter';

const VALUE_LIST = {
  working: [
    '기념일/명절',
    '인사/안부',
    '축하/감사',
    '안내/공지',
    '요청/제안',
    '문의/답변',
    '사과/수습',
    '그외',
  ],
  personal: ['기념일/명절', '인사/안부', '축하/감사', '위로/응원', '사과/반성', '그외'],
  none: ['그외'],
};

export default function Step2({ onClickPrev, onClickNext }: StepProps) {
  const { userSelectionResult } = useLetterStore();

  let valueList: string[] = [];

  if (userSelectionResult.purpose === '업무') {
    valueList = VALUE_LIST.working;
  } else if (userSelectionResult.purpose === '개인') {
    valueList = VALUE_LIST.personal;
  } else {
    valueList = VALUE_LIST.none;
  }

  return (
    <MediumCategoryWrapper>
      <Title sequence={1} sequenceShown>
        어떤 글을 써드릴까요?
      </Title>
      <ValueList valueList={valueList} selectionKey="type" etcValue="그외 어떤 글을 써드릴까요?" />
      <PrevNextButtons selectionKey="type" onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </MediumCategoryWrapper>
  );
}
