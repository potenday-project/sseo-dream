import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import HeaderTags from '../header/HeaderTags';
import Title from '../shared/title/Title';
import TextArea from '../shared/textArea/TextArea';
import PrevNextButtons from '../PrevNextButtons';

export default function Step5() {
  return (
    <MediumCategoryWrapper>
      <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title sequence={4} sequenceShown>
        쓰려는 내용의 키워드를 설명해주세요
      </Title>
      <TextArea />
      <PrevNextButtons />
    </MediumCategoryWrapper>
  );
}

/* <MediumCategoryPage
        selectedDataList={['업무목적', '인사/안부', '상사']}
        title="쓰려는 내용의 키워드를 설명해주세요"
        sequence={4}
        hasKeyword
      /> */
