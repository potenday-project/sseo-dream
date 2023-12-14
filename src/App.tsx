import MediumCategories from './pages/MediumCategories';

function App() {
  return (
    <div>
      <MediumCategories
        selectedDataList={['업무목적', '인사/안부', '상사']}
        title="어떤 글을 써드릴까요?"
        sequence={1}
        valueList={[
          '기념일/명절',
          '인사/안부',
          '축하/감사',
          '안내/공지',
          '요청/제안',
          '문의/답변',
          '사과/수습',
        ]}
      />
    </div>
  );
}

export default App;
