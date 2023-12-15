import { useState } from 'react';
import Input from './shared/input/Input';
import ValueButton from './shared/button/ValueButton';

interface ValueListProps {
  valueList: string[];
  hasEtc?: boolean;
}

export default function ValueList({ valueList, hasEtc = false }: ValueListProps) {
  const [currentValue, setCurrentValue] = useState('');
  const [etcShown, setEtcShown] = useState(false);

  const handleClick = (value: string) => {
    setEtcShown(false);

    setCurrentValue(value);
  };

  const handleEtcClick = () => {
    setEtcShown(true);

    setCurrentValue('그외');
  };

  return (
    <div className="m-4 mt-7 flex flex-wrap gap-x-3 gap-y-5">
      {valueList.map((value) => (
        <ValueButton
          key={value}
          isActive={value === currentValue}
          onClick={() => handleClick(value)}>
          {value}
        </ValueButton>
      ))}
      {hasEtc && (
        <ValueButton isActive={currentValue === '그외'} onClick={handleEtcClick}>
          그외
        </ValueButton>
      )}
      {etcShown && <Input>그외 어떤 글을 써드릴까요?</Input>}
    </div>
  );
}
