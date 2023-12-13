import HeaderDataList from './layouts/HeaderDataList';
import Title from './layouts/Title';
import PurposeList from './layouts/PurposeList';
import { Purpose } from './types/Purpose';

function App() {
  const purposes: Purpose[] = [
    { title: '업무', contents: '업무', svgName: 'working' },
    { title: '개인', contents: '개인', svgName: 'personal' },
  ];

  return (
    <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
      <HeaderDataList selectedDataList={['업무목적', '인사/안부', '상사']} />
      <Title title="어떤 목적으로 글을 써드릴까요?" sequence={1} sequenceShown />
      <PurposeList purposeList={purposes} />
    </div>
  );
}

export default App;
