import { useEffect, useState } from 'react';

import ResultContent from './ResultContent';
import IconButton from './IconButton';

import { useLetterStore } from '../stores/letter';
import useToast from '../hooks/useToast';

import { TOAST_MESSAGE } from '../constants/result';
import FooterButton from './shared/button/FooterButton';

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

  useEffect(() => {
    setText(initialText);
  }, [tabs]);

  return (
    <div className="p-10 absolute left-0 top-0 flex flex-col w-full h-full bg-background-dark overflow-auto z-30">
      <ResultContent
        tabs={tabs}
        onClickTab={onClickTab}
        onChangeTextarea={handleChangeTextarea}
        text={text}
        isEditable
        actions={<IconButton icon="close" onClick={handleClickClose} />}
      />
      <div className="flex gap-[11px] mt-[16px]">
        <FooterButton
          onClick={handleClickSaveButton}
          isActive
          className="w-full py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white">
          수정 완료
        </FooterButton>
        <FooterButton
          onClick={handleClickCopyButton}
          className="w-full py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white">
          복사하기
        </FooterButton>
      </div>
    </div>
  );
}

export default ResultModify;
