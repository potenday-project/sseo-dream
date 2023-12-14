import ButtonFragment from '../components/ButtonFragment';

interface Props {
  postCategoryList: string[];
}

export default function PostCategoryList({ postCategoryList }: Props) {
  return (
    <div className="flex items-center justify-center m-4">
      {postCategoryList.map((postCategory) => (
        <ButtonFragment key={postCategory} contents={postCategory} />
      ))}
    </div>
  );
}
