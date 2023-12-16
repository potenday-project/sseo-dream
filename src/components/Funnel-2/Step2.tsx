import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';

const VALUE_LIST = [
  '기념일/명절',
  '인사/안부',
  '축하/감사',
  '안내/공지',
  '요청/제안',
  '문의/답변',
  '사과/수습',
  '그외',
];

export default function Step2({ onClickPrev, onClickNext }: StepProps) {
  return (
    <MediumCategoryWrapper>
      <Title sequence={1} sequenceShown>
        어떤 글을 써드릴까요?
      </Title>
      <ValueList valueList={VALUE_LIST} selectionKey="type" />
      <PrevNextButtons selectionKey="type" onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </MediumCategoryWrapper>
  );
}
