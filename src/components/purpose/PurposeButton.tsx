import { Purpose } from './types';

export default function PurposeButton({ title, svgName }: Purpose) {
  const svgFileName = `${svgName}.svg`;

  return (
    <div className="flex flex-col m-1 items-center justify-center w-full py-14 bg-neutral-700 rounded-3xl text-white">
      <img src={svgFileName} alt={title} />
      <div className="pt-8 text-lg font-bold">{title}</div>
    </div>
  );
}
