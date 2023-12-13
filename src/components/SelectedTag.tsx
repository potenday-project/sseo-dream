interface Props {
  contents: string;
}

export default function SelectedTag({ contents }: Props) {
  return (
    <div className="justify-start items-start gap-3 flex">
      <div className="px-2.5 py-1.5 bg-yellow-200 rounded-2xl justify-center items-center gap-2.5 flex">
        <div className="text-zinc-800 text-sm font-bold font-['Pretendard']">{contents}</div>
      </div>
    </div>
  );
}
