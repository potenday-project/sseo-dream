interface Props {
  title: string;
}
function Title({ title }: Props) {
  return (
    <div className="left-[20px] top-[124px] absolute text-white text-[26px] font-bold font-['Pretendard'] leading-[39px]">
      {title}
    </div>
  );
}

export default Title;
