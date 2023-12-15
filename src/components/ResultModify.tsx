import { useState } from 'react';

import ResultContent from './ResultContent';
import IconButton from './IconButton';

import { useLetterStore } from '../stores/letter';
import useToast from '../hooks/useToast';

import { TOAST_MESSAGE } from '../constants/result';

type ResultModifyProps = {
  initialText: string;
  tabs: { label: string; isActive: boolean }[];
  onClickTab: (index: number) => void;
  setIsEditable: (isEditable: boolean) => void;
};

function ResultModify({ initialText, tabs, onClickTab, setIsEditable }: ResultModifyProps) {
  const [text, setText] = useState(initialText);
  const { onShowToast } = useToast();
  const { generatedLetterContents, setGeneratedLetterContents } = useLetterStore();

  const activeIndex = generatedLetterContents.findIndex((content) => content.isActive);

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClickClose = () => {
    setIsEditable(false);
  };

  const handleClickSaveButton = () => {
    const newGeneratedLetterContents = generatedLetterContents.map((content, index) => ({
      ...content,
      content: index === activeIndex ? text : content.content,
    }));
    setGeneratedLetterContents(newGeneratedLetterContents);
    handleClickClose();
  };

  const handleClickCopyButton = () => {
    navigator.clipboard.writeText(text);
    onShowToast(TOAST_MESSAGE.SUCCESS, 'success');
  };

  return (
    <div className="p-10 fixed left-0 top-0 w-full h-full bg-background overflow-auto">
      <ResultContent
        tabs={tabs}
        onClickTab={onClickTab}
        onChangeTextarea={handleChangeTextarea}
        text={text}
        isEditable
        actions={<IconButton icon="close" onClick={handleClickClose} />}
      />
      <div>
        <button type="button" onClick={handleClickSaveButton}>
          수정 완료
        </button>
        <button type="button" onClick={handleClickCopyButton}>
          복사하기
        </button>
      </div>
    </div>
  );
}

export default ResultModify;
