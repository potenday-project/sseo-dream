interface Props {
  contents: string;
}

export default function SelectedDataFragment({ contents }: Props) {
  return (
    <div className="flex gap-2 px-2.5 py-2 bg-neutral-700 rounded-md text-white text-md font-bold">
      <div className="">{contents}</div>
    </div>
  );
}
