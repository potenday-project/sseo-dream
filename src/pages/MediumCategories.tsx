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
    <div>
      <div className="m-auto min-h-screen max-w-2xl max-h-full bg-zinc-800">
        <HeaderDataList selectedDataList={selectedDataList} />
        <Title title={title} sequence={sequence} sequenceShown />
        <ValueList valueList={valueList} etcTitle={title} />
      </div>
      <footer className="h-20 -translate-y-full">rewre</footer>
    </div>
  );
}
