import Textarea from './Textarea';
import TabList from './TabList';

type ResultContentProps = {
  isEditable?: boolean;
  tabs: {
    label: string;
    isActive?: boolean;
  }[];
  actions?: React.ReactNode;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClickTab: (index: number) => void;
  onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function ResultContent({
  isEditable = false,
  tabs,
  text,
  actions,
  disabled = false,
  isLoading = false,
  onChangeTextarea,
  onClickTab,
}: ResultContentProps) {
  return (
    <>
      <TabList tabs={tabs} onClick={onClickTab} actions={actions} disabled={disabled} />
      <Textarea
        value={text}
        onChange={onChangeTextarea}
        isEditable={isEditable}
        isLoading={isLoading}
      />
    </>
  );
}

export default ResultContent;
