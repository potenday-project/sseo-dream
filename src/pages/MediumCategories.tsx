import Title from '../layouts/Title';
import HeaderDataList from '../layouts/HeaderDataList';
import ValueList from '../layouts/ValueList';
import PrevNextButtons from '../components/PrevNextButtons';
import NameList from '../layouts/NameList';

interface Props {
  selectedDataList: string[];
  title: string;
  subTitle?: string;
  sequence: number;
  valueList?: string[];
  hasName?: boolean;
  hasKeyword?: boolean;
}

export default function MediumCategories({
  selectedDataList,
  title,
  subTitle,
  sequence,
  valueList,
  hasName,
  hasKeyword,
}: Props) {
  return (
    <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <HeaderDataList selectedDataList={selectedDataList} />
          <Title title={title} subTitle={subTitle} sequence={sequence} sequenceShown />
          {valueList && <ValueList valueList={valueList} etcTitle={title} />}
          {hasName && <NameList />}
          {hasKeyword && (
            <div className="flex flex-wrap items-center justify-start m-4">TEXTAREA</div>
          )}
        </div>
        <footer className="h-24">
          <PrevNextButtons isActive />
        </footer>
      </div>
    </div>
  );
}
