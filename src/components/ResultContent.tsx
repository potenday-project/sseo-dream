import Textarea from './Textarea';
import TabList from './TabList';

const isEditable = false;

type ResultContentProps = {
  tabs: {
    label: string;
    isActive?: boolean;
  }[];
  actions?: React.ReactNode;
  text: string;
  disabled?: boolean;
  onClickTab: (index: number) => void;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function ResultContent({
  tabs,
  text,
  actions,
  disabled = false,
  onChangeTextarea,
  onClickTab,
}: ResultContentProps) {
  return (
    <>
      <TabList tabs={tabs} onClick={onClickTab} actions={actions} disabled={disabled} />
      <Textarea value={text} onChange={onChangeTextarea} isEditable={isEditable} />
    </>
  );
}

export default ResultContent;
