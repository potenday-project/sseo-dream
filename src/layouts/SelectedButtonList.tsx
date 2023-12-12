import DataButton from '../components/DataButton';

interface Props {
  dataList: string[];
}

function HeaderDataList({ dataList }: Props) {
  return (
    <div className="left-[20px] top-[76px] absolute justify-start items-start gap-2 inline-flex">
      {dataList.map((data) => (
        <DataButton key={data} contents={data} />
      ))}
    </div>
  );
}

export default HeaderDataList;
