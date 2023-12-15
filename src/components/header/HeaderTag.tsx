import { PropsWithChildren } from 'react';

export default function HeaderTag({ children }: PropsWithChildren) {
  return (
    <div className="px-2.5 py-1.5 rounded-2xl text-sm font-bold bg-yellow-200 text-zinc-800">
      {children}
    </div>
  );
}
