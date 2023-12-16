import HeaderTag from './HeaderTag';

import { useLetterStore } from '../../../stores/letter';

function HeaderTags() {
  const { userSelectionResult } = useLetterStore();

  return (
    <div className="pt-8 px-5 flex gap-2 whitespace-nowrap">
      {userSelectionResult.purpose && <HeaderTag>{userSelectionResult.purpose}</HeaderTag>}
      {userSelectionResult.type && <HeaderTag>{userSelectionResult.type}</HeaderTag>}
      {userSelectionResult.recipientCategory && (
        <HeaderTag>{userSelectionResult.recipientCategory}</HeaderTag>
      )}
      {userSelectionResult.letterSentence && (
        <HeaderTag>{userSelectionResult.letterSentence}</HeaderTag>
      )}
    </div>
  );
}

export default HeaderTags;
