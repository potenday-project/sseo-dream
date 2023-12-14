interface Props {
  isActive: boolean;
}

export default function PrevNextButtons({ isActive }: Props) {
  return (
    <div className="flex flex-col m-4 items-center justify-center">
      <div>
        <div className="w-40 h-14 mx-2 px-12 py-4 bg-neutral-700 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="w-14 text-center text-white text-base font-bold font-['Pretendard']">
            이전
          </div>
        </div>
        {isActive ? (
          <div className="w-40 h-14 mx-2 px-12 py-4 bg-yellow-200 rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="w-14 text-center text-zinc-800 text-base font-bold font-['Pretendard']">
              다음
            </div>
          </div>
        ) : (
          <div className="w-40 h-14 mx-2 px-12 py-4 bg-neutral-700 rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="w-14 text-center text-zinc-500 text-base font-bold font-['Pretendard']">
              다음
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
