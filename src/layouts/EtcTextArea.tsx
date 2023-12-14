interface Props {
  title: string;
}

export default function EtcTextArea({ title }: Props) {
  return (
    <div className="w-full mt-8 ml-6 mr-6 flex-col justify-start items-start gap-3 inline-flex">
      <div className="text-zinc-400 text-sm font-medium font-['Pretendard']">그외 {title}</div>
      <textarea className="w-full h-[53px] text-white bg-neutral-700 rounded-md" />
    </div>
  );
}
