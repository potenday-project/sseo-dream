import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import TextArea from '../shared/textArea/TextArea';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';

export default function Step5({ onClickPrev, onClickNext }: StepProps) {
  return (
    <MediumCategoryWrapper>
      <Title sequence={4} sequenceShown>
        쓰려는 내용의 키워드를 설명해주세요
      </Title>
      <TextArea selectionKey="contentDescription" />
      <PrevNextButtons
        selectionKey="contentDescription"
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </MediumCategoryWrapper>
  );
}
