import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';
import { useLetterStore } from '../../stores/letter';

const WORKING_VALUE_LIST = ['상사', '동료', '거래처', '전사', '그외'];
const PERSONAL_VALUE_LIST = ['부모님', '가족', '친구', '연인', '그외'];

export default function Step3({ onClickPrev, onClickNext }: StepProps) {
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
      <Title sequence={2} sequenceShown>
        누구에게 쓰는 글일까요?
      </Title>
      <ValueList
        valueList={VALUE_LIST}
        selectionKey="recipientCategory"
        etcValue="누구에게 글을 써드릴까요?"
      />
      <PrevNextButtons
        selectionKey="recipientCategory"
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </MediumCategoryWrapper>
  );
}
