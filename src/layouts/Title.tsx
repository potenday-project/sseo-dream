interface Props {
  title: string;
  sequence: number;
  sequenceShown: boolean;
}

function Title({ title, sequence, sequenceShown }: Props) {
  return (
    <div className="flex items-center justify-between text-white text-7 font-bold font-['Pretendard'] leading-9">
      <div className="text-white text-2xl font-bold font-['Pretendard']">{title}</div>
      {sequenceShown && <div className="text-white text-xs ml-auto font-medium font-['Pretendard']">({sequence}/6)</div>}
    </div>
  );
}

export default Title;
