export default function NameList() {
  return (
    <div className="flex flex-wrap items-center justify-start m-4">
      <div className="w-full m-5 flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-white text-base font-bold font-['Pretendard']">받는 분 성함</div>
        <input type="text" className="w-full h-14 bg-neutral-700 rounded-md" />
      </div>
      <div className="w-full m-5 flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-white text-base font-bold font-['Pretendard']">보내는 분 성함</div>
        <input type="text" className="w-full h-14 bg-neutral-700 rounded-md" />
      </div>
    </div>
  );
}
