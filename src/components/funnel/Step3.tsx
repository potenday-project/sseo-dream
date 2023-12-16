import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';

const VALUE_LIST = ['상사', '동료', '거래처', '전사', '그외'];

export default function Step3({ onClickPrev, onClickNext }: StepProps) {
  return (
    <MediumCategoryWrapper>
      <Title sequence={2} sequenceShown>
        누구에게 쓰는 글일까요?
      </Title>
      <ValueList valueList={VALUE_LIST} selectionKey="recipientCategory" />
      <PrevNextButtons
        selectionKey="recipientCategory"
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </MediumCategoryWrapper>
  );
}
