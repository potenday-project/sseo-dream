import { PropsWithChildren } from 'react';

import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import HeaderTags from '../header/HeaderTags';
import Title from '../shared/title/Title';
import TextArea from '../shared/textArea/TextArea';

export default function Step5({ children }: PropsWithChildren) {
  return (
    <MediumCategoryWrapper>
      <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title sequence={4} sequenceShown>
        쓰려는 내용의 키워드를 설명해주세요
      </Title>
      <TextArea />
      {children}
    </MediumCategoryWrapper>
  );
}
