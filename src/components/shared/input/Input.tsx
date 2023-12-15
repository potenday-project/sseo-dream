import { PropsWithChildren } from 'react';

export default function Input({ children }: PropsWithChildren) {
  return (
    <div className="w-full my-5 flex flex-col gap-3">
      <div className="font-bold text-white">{children}</div>
      <input type="text" className="w-full h-14 p-3 rounded-md text-white bg-neutral-700" />
    </div>
  );
}
