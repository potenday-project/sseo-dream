import { useState } from 'react';
import EtcTextArea from './EtcTextArea.tsx';

interface Props {
  valueList: string[];
  etcTitle: string;
}

export default function ValueList({ valueList, etcTitle }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [etcShown, setEtcShown] = useState<boolean>(false);

  const handleClick = (value: string) => {
    setEtcShown(false);
    if (value !== selectedValue) {
      setSelectedValue(value);
    } else {
      setSelectedValue('');
    }
  };

  const handleEtcClick = () => {
    setEtcShown(!etcShown);
    setSelectedValue('');
  };

  return (
    <div className="flex flex-wrap items-center justify-start m-4">
      {valueList.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => handleClick(value)}
          className={`w-30 h-12 mx-2.5 my-2 px-3.5 py-3 rounded-md justify-center items-center gap-2.5 inline-flex ${
            value === selectedValue ? 'bg-yellow-200' : 'bg-neutral-700'
          }`}>
          <div
            className={`${
              value === selectedValue ? 'text-zinc-800' : 'text-white'
            } text-lg font-bold font-['Pretendard']`}>
            {value}
          </div>
        </button>
      ))}
      <button
        key="etc"
        type="button"
        onClick={() => handleEtcClick()}
        className={`w-30 h-12 mx-2.5 my-2 px-3.5 py-3 rounded-md justify-center items-center gap-2.5 inline-flex ${
          etcShown ? 'bg-yellow-200' : 'bg-neutral-700'
        }`}>
        <div
          className={`${
            etcShown ? 'text-zinc-800' : 'text-white'
          } text-lg font-bold font-['Pretendard']`}>
          그외
        </div>
      </button>
      {etcShown && <EtcTextArea title={etcTitle} />}
    </div>
  );
}
