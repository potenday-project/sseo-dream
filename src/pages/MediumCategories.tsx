import Title from '../layouts/Title';
import HeaderDataList from '../layouts/HeaderDataList';
import PostCategoryList from '../layouts/PostCategoryList';

interface Props {
  selectedDataList: string[];
  title: string;
  sequence: number;
  postCategoryList: string[];
}

export default function MediumCategories({
  selectedDataList, title, sequence, postCategoryList,
}: Props) {
  // ['업무목적', '인사/안부', '상사']
  return (
    <>
      <HeaderDataList selectedDataList={selectedDataList} />
      <Title title={title} sequence={sequence} sequenceShown />
      <PostCategoryList postCategoryList={postCategoryList} />
    </>
  );
}
