import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import SenderRecipientTextField from '../SenderRecipientTextField';
import PrevNextButtons from '../PrevNextButtons';

import { StepProps } from './types';

export default function Step4({ onClickPrev, onClickNext }: StepProps) {
  return (
    <MediumCategoryWrapper>
      <Title sequence={3} sequenceShown subTitle="(선택)">
        받는 분과 보내는 분의 성함을 적어주세요
      </Title>
      <SenderRecipientTextField />
      <PrevNextButtons onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </MediumCategoryWrapper>
  );
}
