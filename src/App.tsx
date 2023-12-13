import HeaderDataList from './layouts/HeaderDataList';
import Title from './layouts/Title';

function App() {
  return (
    <div className="m-auto min-h-screen max-w-3xl max-h-full relative bg-zinc-800">
      <HeaderDataList selectedDataList={['업무목적', '인사/안부', '인사/안부']} />
      <Title title="어떤 목적으로 글을 써드릴까요fdsfsfsfs?" sequence={1} sequenceShown />
      <div className="w-[163px] h-[245px] left-[20px] top-[258px] absolute bg-neutral-700 rounded-[20px]" />
      <div className="w-[163px] h-[245px] left-[192px] top-[258px] absolute bg-neutral-700 rounded-[20px]" />
      <div className="left-[52px] top-[406px] absolute flex-col justify-start items-center gap-2 inline-flex">
        <div className="text-white text-lg font-bold font-['Pretendard']">업무</div>
        <div className="text-center text-white text-[15px] font-light font-['Pretendard']">업무적인 글 설명<br />업무적인 글 설명
        </div>
      </div>
      <div className="left-[224px] top-[406px] absolute flex-col justify-start items-center gap-2 inline-flex">
        <div className="text-white text-lg font-bold font-['Pretendard']">개인</div>
        <div className="text-center text-white text-[15px] font-light font-['Pretendard']">개인적인 글 설명<br />개인적인 글 설명
        </div>
      </div>
      <div className="w-[66px] h-[61px] left-[70px] top-[325px] absolute">
        <div className="w-[26.13px] h-[30.46px] left-[6.84px] top-[11.05px] absolute" />
        <div className="w-[18.56px] h-[35.12px] left-[47.43px] top-[2.47px] absolute" />
      </div>
      <div className="w-[71px] h-16 left-[238px] top-[322px] absolute">
        <div className="w-[13.62px] left-[51.89px] top-[19.77px] absolute" />
      </div>
    </div>
  );
}

export default App;
