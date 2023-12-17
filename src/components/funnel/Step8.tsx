import { useEffect, useState } from 'react';

import IconButton from '../IconButton';
import ResultContent from '../ResultContent';
import ResultModify from '../ResultModify';

import useLetter from '../../hooks/useLetter';
import useToast from '../../hooks/useToast';

import { useLetterStore } from '../../stores/letter';
import { TAB_LABEL, TOAST_MESSAGE } from '../../constants/result';
import { MediumCategoryWrapper } from '../shared/wrapper/Wrapper';
import Title from '../shared/title/Title';

import IconPrev from '../../assets/icon-prev.svg';
import FooterButton from '../shared/button/FooterButton';
import { StepProps } from './types';

export default function Step8({ onClickPrev, onClickNext }: StepProps) {
  const [isEditable, setIsEditable] = useState(false);
  const { onShowToast } = useToast();
  const { data = '', postUserData, status } = useLetter();
  const {
    userSelectionResult,
    generatedLetterContents,
    setGeneratedLetterContents,
    resetLetterStore,
  } = useLetterStore();

  const tabs = generatedLetterContents.map((content, index) => ({
    label: TAB_LABEL[index],
    isActive: content.isActive,
  }));
  const activeIndex = generatedLetterContents.findIndex((content) => content.isActive);
  const disabled = status === 'loading' || status === 'writing';
  const textLookup = {
    loading: '로딩중..',
    writing: data,
    complete: generatedLetterContents[activeIndex]?.content || '',
    error: '알수 없는 에러가 발생했습니다.',
    init: generatedLetterContents[activeIndex]?.content || '',
  };

  const handleClickTab = (index: number) => {
    const newGeneratedLetterContents = generatedLetterContents.map((content, i) => ({
      ...content,
      isActive: i === index,
    }));
    setGeneratedLetterContents(newGeneratedLetterContents);
  };

  const handleClickResetButton = () => {
    const isLimit = generatedLetterContents.length === 3;
    if (isLimit) {
      onShowToast(TOAST_MESSAGE.WARNING, 'warning');
      return;
    }

    const newGeneratedLetterContents = [
      ...generatedLetterContents.map((content) => ({ ...content, isActive: false })),
      {
        content: '',
        isActive: true,
      },
    ];
    setGeneratedLetterContents(newGeneratedLetterContents);
    postUserData({
      ...userSelectionResult,
      ...(generatedLetterContents.length > 0 && {
        beforeMessages: generatedLetterContents.map((content) => content.content),
      }),
    });
  };

  useEffect(() => {
    if (status === 'complete') {
      const newGeneratedLetterContents = generatedLetterContents.map((content) => {
        if (content.isActive) {
          return {
            ...content,
            content: data,
          };
        }
        return content;
      });
      setGeneratedLetterContents(newGeneratedLetterContents);
    }
  }, [status]);

  const handleClickModifyButton = () => {
    setIsEditable(true);
  };

  const handleClickCopyButton = () => {
    navigator.clipboard.writeText(textLookup[status]);
    onShowToast(TOAST_MESSAGE.SUCCESS, 'success');
  };

  const handleClickNewLetterButton = () => {
    onClickNext();
    resetLetterStore();
  };

  const handleClickPrevButton = () => {
    onClickPrev();
  };

  if (isEditable) {
    return (
      <MediumCategoryWrapper>
        <ResultModify
          initialText={textLookup[status]}
          tabs={tabs}
          onClickTab={handleClickTab}
          setIsEditable={setIsEditable}
        />
      </MediumCategoryWrapper>
    );
  }

  return (
    <MediumCategoryWrapper>
      <Title sequence={7} sequenceShown>
        <div className="flex items-center">
          <button type="button" onClick={handleClickPrevButton} aria-label="이전">
            <div className="bg-contentBackground py-[8px] px-[11px] mt-[-4px] mr-[9px] rounded-[40px]">
              <IconPrev />
            </div>
          </button>
          <span>써드렸어요</span>
        </div>
      </Title>

      <div className="p-5">
        <ResultContent
          tabs={tabs}
          onClickTab={handleClickTab}
          text={textLookup[status]}
          disabled={disabled}
          actions={<IconButton icon="reset" onClick={handleClickResetButton} disabled={disabled} />}
          isLoading={status === 'loading'}
        />
        <div className="mt-[36px]">
          <div className="flex gap-[11px] mb-[20px]">
            <FooterButton
              onClick={handleClickModifyButton}
              disabled={disabled}
              className="w-full py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white">
              수정하기
            </FooterButton>
            <FooterButton
              onClick={handleClickCopyButton}
              disabled={disabled}
              className="w-full py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white">
              복사하기
            </FooterButton>
          </div>
          <div>
            <FooterButton
              onClick={handleClickNewLetterButton}
              disabled={disabled}
              className="w-full py-4 text-center rounded-md text-base font-bold text-white bg-neutral-700 whitespace-nowrap cursor-pointer bg-contentBackground text-white">
              새글 쓰기
            </FooterButton>
          </div>
        </div>
      </div>
    </MediumCategoryWrapper>
  );
}
