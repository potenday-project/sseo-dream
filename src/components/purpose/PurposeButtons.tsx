import PurposeButton from './PurposeButton';

import { Purpose } from './types';

const purposes: Purpose[] = [
  { title: '업무', contents: '업무', svgName: 'working' },
  { title: '개인', contents: '개인', svgName: 'personal' },
];

function PurposeButtons() {
  return (
    <div className="m-1 px-5 h-[80vh] flex items-center justify-center">
      {purposes.map((purpose) => (
        <PurposeButton
          key={purpose.title}
          title={purpose.title}
          contents={purpose.contents}
          svgName={purpose.svgName}
        />
      ))}
    </div>
  );
}

export default PurposeButtons;
