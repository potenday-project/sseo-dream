import { UserSelectionResult, useLetterStore } from '../../../stores/letter';

type TextAreaProps = {
  selectionKey: keyof UserSelectionResult;
};

export default function TextArea({ selectionKey }: TextAreaProps) {
  const { userSelectionResult, setUserSelectionResult } = useLetterStore();

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserSelectionResult({ ...userSelectionResult, [selectionKey]: e.target.value });
  };

  return (
    <div className="m-5 p-4 flex flex-wrap items-center">
      <textarea
        onChange={(e) => handleChangeValue(e)}
        value={userSelectionResult.contentDescription}
        className="w-full h-screen max-h-[50vh] p-3 text-white bg-neutral-700 rounded-md focus:outline-none resize-none bg-contentBackground"
      />
    </div>
  );
}
