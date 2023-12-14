interface Props {
  title: string;
  subTitle?: string;
  sequence?: number;
  sequenceShown: boolean;
}

function Title({ title, subTitle, sequence, sequenceShown }: Props) {
  return (
    <div
      className="pt-5 pb-5 m-5 flex items-center justify-between break-keep text-white text-7
    font-bold font-['Pretendard'] leading-9">
      {subTitle ? (
        <div className="w-80">
          <span className="text-white text-2xl font-bold font-['Pretendard']">{title}</span>
          <span className="text-neutral-400 text-2xl font-bold font-['Pretendard']">
            ({subTitle})
          </span>
        </div>
      ) : (
        <div className="text-white text-2xl font-bold font-['Pretendard']">{title}</div>
      )}
      {sequenceShown && (
        <div className="text-white text-xs ml-auto font-medium font-['Pretendard']">
          ({sequence}/6)
        </div>
      )}
    </div>
  );
}

export default Title;
