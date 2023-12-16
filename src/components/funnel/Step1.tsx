import { PropsWithChildren } from 'react';

import Title from '../shared/title/Title';

export default function Step1({ children }: PropsWithChildren) {
  return (
    <>
      <Title sequenceShown={false}>어떤 목적으로 글을 써드릴까요?</Title>
      {children}
    </>
  );
}
