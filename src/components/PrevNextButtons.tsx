import FooterButton from './shared/button/FooterButton';

import { UserSelectionResult, useLetterStore } from '../stores/letter';

type PrevNextButtonsProps = {
  onClickPrev: () => void;
  onClickNext: () => void;
  selectionKey?: keyof UserSelectionResult;
};

export default function PrevNextButtons({
  onClickPrev,
  onClickNext,
  selectionKey,
}: PrevNextButtonsProps) {
  const { userSelectionResult } = useLetterStore();

  return (
    <footer className="flex p-4 items-center justify-center mt-auto">
      <FooterButton onClick={onClickPrev}>이전</FooterButton>
      <FooterButton
        isActive={selectionKey && !!userSelectionResult[selectionKey]}
        disabled={selectionKey && !userSelectionResult[selectionKey]}
        onClick={() => {
          onClickNext();
        }}>
        다음
      </FooterButton>
    </footer>
  );
}
