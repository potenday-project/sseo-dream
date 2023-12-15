import Title from '../shared/title/Title';
import PurposeList from '../purpose/PurposeButtons';

export default function Step1() {
  return (
    <>
      <Title sequenceShown={false}>어떤 목적으로 글을 써드릴까요?</Title>
      <PurposeList />
    </>
  );
}
