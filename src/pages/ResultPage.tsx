import { useEffect, useState } from 'react';

import IconButton from '../components/IconButton';
import ResultContent from '../components/ResultContent';
import ResultModify from '../components/ResultModify';

import useLetter from '../hooks/useLetter';
import useToast from '../hooks/useToast';

import { useLetterStore } from '../stores/letter';
import { TAB_LABEL, TOAST_MESSAGE } from '../constants/result';

const DUMMY_DATA = {
  contentDescription: '나는 헤커톤을 진행하고 있는 동료들에게 응원의 글을 쓰고 싶어',
  purpose: '개인',
  recipientCategory: '동료',
  recipientName: '동료들에게',
  senderName: '조효형',
  sentenceLength: 10,
  type: '축하/감사',
} as const;

function ResultPage() {
  const [isEditable, setIsEditable] = useState(false);
  const { onShowToast } = useToast();
  const { data = '', postUserData, status } = useLetter();
  const { generatedLetterContents, setGeneratedLetterContents, resetLetterStore } =
    useLetterStore();

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
    postUserData(DUMMY_DATA);
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
    // FIXME: 초기화면으로 이동 구현 필요
    resetLetterStore();
  };

  if (isEditable) {
    return (
      <ResultModify
        initialText={textLookup[status]}
        tabs={tabs}
        onClickTab={handleClickTab}
        setIsEditable={setIsEditable}
      />
    );
  }

  return (
    <div className="p-10">
      <ResultContent
        tabs={tabs}
        onClickTab={handleClickTab}
        text={textLookup[status]}
        disabled={disabled}
        actions={<IconButton icon="reset" onClick={handleClickResetButton} disabled={disabled} />}
        isLoading={status === 'loading'}
      />
      <div>
        <div>
          <button type="button" onClick={handleClickModifyButton} disabled={disabled}>
            수정하기
          </button>
          <button type="button" onClick={handleClickCopyButton} disabled={disabled}>
            복사하기
          </button>
        </div>
        <button type="button" onClick={handleClickNewLetterButton} disabled={disabled}>
          새글 쓰기
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
