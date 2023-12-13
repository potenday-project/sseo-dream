import SelectedTag from '../components/SelectedTag';

interface Props {
  selectedDataList: string[];
}

function HeaderDataList({ selectedDataList }: Props) {
  return (
    <div className="mt-8 ml-5 justify-start items-start gap-2 inline-flex">
      {selectedDataList.map((selectedData) => (
        <SelectedTag key={selectedData} contents={selectedData} />
      ))}
    </div>
  );
}

export default HeaderDataList;
