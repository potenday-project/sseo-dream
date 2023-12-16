import PurposeButton from './PurposeButton';

import { PURPOSES } from '../../constants/result';
import { useLetterStore } from '../../stores/letter';

type PurposeButtons = {
  onClickNext: () => void;
};

function PurposeButtons({ onClickNext }: PurposeButtons) {
  const { setUserSelectionResult, userSelectionResult, setHeaderTags } = useLetterStore();

  return (
    <div className="m-1 px-5 h-[80vh] flex items-center justify-center">
      {PURPOSES.map((purpose) => (
        <PurposeButton
          key={purpose.content}
          purpose={purpose}
          onClick={() => {
            setHeaderTags();
            setUserSelectionResult({
              ...userSelectionResult,
              purpose: purpose.content,
            });
            onClickNext();
          }}>
          {purpose.content}
        </PurposeButton>
      ))}
    </div>
  );
}

export default PurposeButtons;
