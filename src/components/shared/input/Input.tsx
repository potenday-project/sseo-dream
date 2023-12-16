import { ChangeEvent, PropsWithChildren } from 'react';

type InputProps = {
  value: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ children, name, value, onChange }: PropsWithChildren<InputProps>) {
  return (
    <div className="w-full my-5 flex flex-col gap-3">
      <div className="font-bold text-white">{children}</div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className="w-full h-14 p-3 rounded-md text-white bg-contentBackground"
      />
    </div>
  );
}
