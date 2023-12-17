import Input from './shared/input/Input';
import ValueButton from './shared/button/ValueButton';

import { EtcShown, UserSelectionResult, useLetterStore } from '../stores/letter';

type ValueListProps = {
  valueList: string[];
  selectionKey: Extract<keyof EtcShown, keyof UserSelectionResult>;
  etcValue?: string;
};

export default function ValueList({ valueList, selectionKey, etcValue }: ValueListProps) {
  const { etcShown, setEtcShown, userSelectionResult, setUserSelectionResult } = useLetterStore();

  const handleClick = (value: string) => {
    setEtcShown({ ...etcShown, [selectionKey]: false });
    setUserSelectionResult({ ...userSelectionResult, [selectionKey]: value });
  };

  const handleClickEtc = () => {
    if (etcShown[selectionKey]) {
      return;
    }

    setEtcShown({ ...etcShown, [selectionKey]: true });
    setUserSelectionResult({ ...userSelectionResult, [selectionKey]: '' });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSelectionResult({ ...userSelectionResult, [selectionKey]: e.target.value });
  };

  return (
    <div className="m-4 mt-7 flex flex-wrap gap-x-3 gap-y-5">
      {valueList.map((value) => {
        if (value === '그외') {
          return (
            <ValueButton key={value} isActive={etcShown[selectionKey]} onClick={handleClickEtc}>
              {value}
            </ValueButton>
          );
        }
        return (
          <ValueButton
            key={value}
            isActive={!etcShown[selectionKey] && value === userSelectionResult[selectionKey]}
            onClick={() => handleClick(value)}>
            {value}
          </ValueButton>
        );
      })}
      {etcShown[selectionKey] && (
        <Input value={userSelectionResult[selectionKey]} onChange={handleChangeInput}>
          {etcValue}
        </Input>
      )}
    </div>
  );
}
