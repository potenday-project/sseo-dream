import SelectedDataFragment from '../components/SelectedDataFragment';

interface Props {
  dataList: string[];
}

function HeaderDataList({ dataList }: Props) {
  return (
    <div className="justify-start items-start inline-flex">
      {dataList.map((data) => (
        <SelectedDataFragment key={data} contents={data} />
      ))}
    </div>
  );
}

export default HeaderDataList;
