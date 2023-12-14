import Title from '../layouts/Title';
import HeaderDataList from '../layouts/HeaderDataList';
import ValueList from '../layouts/ValueList';

interface Props {
  selectedDataList: string[];
  title: string;
  sequence: number;
  valueList: string[];
}

export default function MediumCategories({ selectedDataList, title, sequence, valueList }: Props) {
  return (
    <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <HeaderDataList selectedDataList={selectedDataList} />
          <Title title={title} sequence={sequence} sequenceShown />
          <ValueList valueList={valueList} etcTitle={title} />
        </div>
        <footer className="h-20">
          
        </footer>
      </div>
    </div>
  );
}
