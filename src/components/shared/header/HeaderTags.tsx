import HeaderTag from './HeaderTag';

interface HeaderTagsProps {
  selectedDataList: string[];
}

function HeaderTags({ selectedDataList }: HeaderTagsProps) {
  return (
    <div className="pt-8 px-5 flex gap-2 whitespace-nowrap">
      {selectedDataList.map((tag) => (
        <HeaderTag key={tag}>{tag}</HeaderTag>
      ))}
    </div>
  );
}

export default HeaderTags;
