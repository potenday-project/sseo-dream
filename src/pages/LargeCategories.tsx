import { Purpose } from '../types/Purpose';
import PurposeList from '../layouts/PurposeList';
import Title from '../layouts/Title';
import HeaderDataList from '../layouts/HeaderDataList';

export default function LargeCategories() {
  const purposes: Purpose[] = [
    { title: '업무', contents: '업무', svgName: 'working' },
    { title: '개인', contents: '개인', svgName: 'personal' },
  ];

  return (
    <>
      <HeaderDataList selectedDataList={[]} />
      <Title title="어떤 목적으로 글을 써드릴까요?" sequenceShown={false} />
      <PurposeList purposeList={purposes} />
    </>
  );
}
