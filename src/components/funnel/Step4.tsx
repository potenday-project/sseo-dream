import { MediumCategoryWrapper, Wrapper } from '../shared/wrapper/Wrapper';
import HeaderTags from '../header/HeaderTags';
import Input from '../shared/input/Input';
import Title from '../shared/title/Title';
import PrevNextButtons from '../PrevNextButtons';

export default function Step4() {
  return (
    <MediumCategoryWrapper>
      <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title sequence={3} sequenceShown subTitle="(선택)">
        받는 분과 보내는 분의 성함을 적어주세요
      </Title>
      <Wrapper className="p-5 flex flex-wrap items-center justify-start">
        {['받는 분 성함', '보내는 분 성함'].map((item) => (
          <Input key={item}>{item}</Input>
        ))}
      </Wrapper>
      <PrevNextButtons />
    </MediumCategoryWrapper>
  );
}
