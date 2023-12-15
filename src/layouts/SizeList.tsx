import { useState } from 'react';

interface Props {
  sizeList: string[];
}

export default function SizeList({ sizeList }: Props) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleClick = (size: string) => {
    if (size !== selectedSize) {
      setSelectedSize(size);
    } else {
      setSelectedSize('');
    }
  };

  return (
    <div className="flex flex-col justify-items-start m-4">
      {sizeList.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => handleClick(size)}
          className={`w-30 h-12 mx-2.5 my-2 px-3.5 py-3 rounded-md justify-center items-center gap-2.5 inline-flex ${
            size === selectedSize ? 'bg-yellow-200' : 'bg-neutral-700'
          }`}>
          <div
            className={`${
              size === selectedSize ? 'text-zinc-800' : 'text-white'
            } text-lg font-bold font-['Pretendard']`}>
            {size}
          </div>
        </button>
      ))}
    </div>
  );
}
