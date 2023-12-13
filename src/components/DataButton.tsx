interface Props {
  contents: string;
}

export default function DataButton({ contents }: Props) {
  return (
    <div className="px-2.5 py-2 bg-neutral-700 rounded-md justify-center items-center gap-2 inline-flex">
      <div className="text-white text-md font-bold font-['Pretendard']">{contents}</div>
    </div>
  );
}
