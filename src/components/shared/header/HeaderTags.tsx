import { useEffect } from 'react';
import HeaderTag from './HeaderTag';

import { useLetterStore } from '../../../stores/letter';

function HeaderTags() {
  const { headerTags, setHeaderTags } = useLetterStore();

  useEffect(() => {
    setHeaderTags();
  }, [setHeaderTags]);

  return (
    <div className="pt-8 px-5 flex gap-2 whitespace-nowrap">
      {headerTags.map((tag) => (
        <HeaderTag key={tag}>{tag}</HeaderTag>
      ))}
    </div>
  );
}

export default HeaderTags;
