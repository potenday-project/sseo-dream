import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';
import { useLetterStore } from '../../stores/letter';

const VALUE_LIST = {
  업무: [
    '기념일/명절',
    '인사/안부',
    '축하/감사',
    '안내/공지',
    '요청/제안',
    '문의/답변',
    '사과/수습',
    '그외',
  ],
  개인: ['기념일/명절', '인사/안부', '축하/감사', '위로/응원', '사과/반성', '그외'],
};

export default function Step2({ onClickPrev, onClickNext }: StepProps) {
  const { purpose } = useLetterStore((state) => state.userSelectionResult);

  return (
    <MediumCategoryWrapper>
      <Title sequence={1} sequenceShown>
        어떤 글을 써드릴까요?
      </Title>
      <ValueList
        valueList={VALUE_LIST[purpose as '업무' | '개인']}
        selectionKey="type"
        etcValue="그외 어떤 글을 써드릴까요?"
      />
      <PrevNextButtons selectionKey="type" onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </MediumCategoryWrapper>
  );
}
