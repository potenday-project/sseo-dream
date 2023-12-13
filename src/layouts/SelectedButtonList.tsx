import DataButton from '../components/DataButton';

interface Props {
  dataList: string[];
}

function HeaderDataList({ dataList }: Props) {
  return (
    <div className="justify-start items-start inline-flex">
      {dataList.map((data) => (
        <DataButton key={data} contents={data} />
      ))}
    </div>
  );
}

export default HeaderDataList;
