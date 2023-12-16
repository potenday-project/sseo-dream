import { PropsWithChildren } from 'react';

type TitleProps = {
  subTitle?: string;
  sequence?: number;
  sequenceShown: boolean;
};

function Title({ subTitle, sequence, sequenceShown, children }: PropsWithChildren<TitleProps>) {
  return (
    <div className="p-5 flex items-center break-keep font-bold text-white">
      <span className="text-xl font-bold text-white max-w-[400px] w-full">
        {children}
        {subTitle && <strong className="text-xl font-bold text-neutral-400">{subTitle}</strong>}
      </span>
      {sequenceShown && (
        <span className="text-xs ml-auto font-medium text-white">{`(${sequence}/6)`}</span>
      )}
    </div>
  );
}

export default Title;
