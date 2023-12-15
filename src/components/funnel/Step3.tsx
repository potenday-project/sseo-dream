import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import HeaderTags from '../header/HeaderTags';
import Title from '../shared/title/Title';
import ValueList from '../ValueList';
import PrevNextButtons from '../PrevNextButtons';

const valueList = ['상사', '동료', '거래처', '전사'];

export default function Step3() {
  return (
    <MediumCategoryWrapper>
      <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title sequence={2} sequenceShown>
        누구에게 쓰는 글일까요?
      </Title>
      <ValueList valueList={valueList} hasEtc />
      <PrevNextButtons />
    </MediumCategoryWrapper>
  );
}
