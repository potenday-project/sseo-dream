import { Wrapper } from './shared/wrapper/Wrapper';
import Input from './shared/input/Input';

import { useLetterStore } from '../stores/letter';

import { SENDER_RECIPIENT } from '../constants/result';

export default function SenderRecipientTextField() {
  const { userSelectionResult, setUserSelectionResult } = useLetterStore();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, selectionKey: string) => {
    setUserSelectionResult({ ...userSelectionResult, [selectionKey]: e.target.value });
  };

  return (
    <Wrapper className="p-5 flex flex-wrap items-center justify-start">
      {SENDER_RECIPIENT.map((item) => (
        <Input
          key={item.value}
          value={userSelectionResult[item.value]}
          name={item.value}
          onChange={(e) => handleChangeInput(e, item.value)}>
          {item.content}
        </Input>
      ))}
    </Wrapper>
  );
}
