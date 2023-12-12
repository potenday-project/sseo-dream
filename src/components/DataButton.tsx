interface Props {
  contents: string;
}

export default function DataButton({ contents }: Props) {
  return (
    <div className="px-3.5 py-3 bg-neutral-700 rounded-md justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-lg font-bold font-['Pretendard']">{contents}</div>
    </div>
  );
}
