import HeaderDataList from './layouts/HeaderDataList';
import Title from './layouts/Title';

function App() {
  return (
    <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
      <HeaderDataList selectedDataList={['업무목적', '인사/안부', '인사/안부']} />
      <Title title="어떤 목적으로 글을 써드릴까요?" sequence={1} sequenceShown />
      <div className="flex justify-center">
        <div className="w-[163px] h-[245px] bg-neutral-700 rounded-[20px]">
          <div className="text-white text-lg font-bold font-['Pretendard']">업무</div>
          <div className="text-center text-white text-[15px] font-light font-['Pretendard']">
            업무적인 글 설명
          </div>
        </div>
        <div className="w-[163px] h-[245px] bg-neutral-700 rounded-[20px]">
          <div className="text-white text-lg font-bold font-['Pretendard']">개인</div>
          <div className="text-center text-white text-[15px] font-light font-['Pretendard']">
            개인적인 글 설명
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
