import PurposeFragment from '../components/PurposeFragment';
import { Purpose } from '../types/Purpose';

interface Props {
  purposeList: Purpose[];
}

function PurposeList({ purposeList }: Props) {
  return (
    <div className="flex items-center justify-center m-4">
      {purposeList.map((purpose) => (
        <PurposeFragment
          key={purpose.title}
          title={purpose.title}
          contents={purpose.contents}
          svgName={purpose.svgName}
        />
      ))}
    </div>
  );
}

export default PurposeList;
