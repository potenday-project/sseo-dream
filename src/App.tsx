import MediumCategories from './pages/MediumCategories';

function App() {
  return (
    <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
      <MediumCategories
        selectedDataList={['업무목적', '인사/안부', '상사']}
        title="어떤 글을 써드릴까요?"
        sequence={1}
        postCategoryList={['기념일/명절', '인사/안부', '축하/감사', '안내/공지', '요청/제안', '문의/답변', '사과/수습']}
      />
    </div>
  );
}

export default App;
