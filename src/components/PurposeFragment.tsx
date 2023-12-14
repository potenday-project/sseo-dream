import { Purpose } from '../types/Purpose';

export default function PurposeFragment({ title, contents, svgName }: Purpose) {
  const svgFileName = `${svgName}.svg`;

  return (
    <div
      key={title}
      className="flex flex-col m-1 items-center justify-center
      w-full h-60 bg-neutral-700 rounded-3xl text-center text-white">
      <img src={svgFileName} alt={title} />
      <div className="m-1 text-lg font-bold font-['Pretendard']">{title}</div>
      <div className="text-sm font-light font-['Pretendard']">{contents}</div>
    </div>
  );
}
