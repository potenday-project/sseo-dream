import { PropsWithChildren } from 'react';
import { PURPOSES } from '../../constants/result';

type PurposeButtonProps = {
  purpose: (typeof PURPOSES)[number];
  onClick: () => void;
};

export default function PurposeButton({ purpose, onClick }: PropsWithChildren<PurposeButtonProps>) {
  return (
    <button
      type="button"
      className="flex flex-col m-1 items-center justify-center w-full py-14 bg-neutral-700 rounded-3xl text-white bg-contentBackground cursor-pointer"
      onClick={onClick}>
      <img src={`${purpose.svgName}.svg`} alt={purpose.content} />
      <div className="pt-8 text-lg font-bold">{purpose.content}</div>
    </button>
  );
}
