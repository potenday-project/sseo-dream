import { PropsWithChildren } from 'react';

import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';
import HeaderTags from '../header/HeaderTags';
import ValueList from '../ValueList';

const valueList = [
  '기념일/명절',
  '인사/안부',
  '축하/감사',
  '안내/공지',
  '요청/제안',
  '문의/답변',
  '사과/수습',
];

export default function Step2({ children }: PropsWithChildren) {
  return (
    <MediumCategoryWrapper>
      <HeaderTags selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title sequence={1} sequenceShown>
        어떤 글을 써드릴까요?
      </Title>
      <ValueList valueList={valueList} hasEtc />
      {children}
    </MediumCategoryWrapper>
  );
}
