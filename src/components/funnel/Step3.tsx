import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';
import { useLetterStore } from '../../stores/letter';

const VALUE_LIST = {
  업무: ['상사', '동료', '거래처', '전사', '그외'],
  개인: ['부모님', '가족', '친구', '연인', '그외'],
};

export default function Step3({ onClickPrev, onClickNext }: StepProps) {
  const { purpose } = useLetterStore((state) => state.userSelectionResult);

  return (
    <MediumCategoryWrapper>
      <Title sequence={2} sequenceShown>
        누구에게 쓰는 글일까요?
      </Title>
      <ValueList
        valueList={VALUE_LIST[purpose as '업무' | '개인']}
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
