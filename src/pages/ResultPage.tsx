import { useEffect } from 'react';
import ResetButton from '../components/ResetButton';
import ResultContent from '../components/ResultContent';
import useLetter from '../hooks/useLetter';
import { useLetterStore } from '../stores/letter';
import useToast from '../hooks/useToast';
import { TAB_LABEL, TOAST_MESSAGE } from '../components/constants/result';

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
  const { onShowToast } = useToast();
  const { data = '', postUserData, status } = useLetter();
  const { generatedLetterContents, setGeneratedLetterContents } = useLetterStore();
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
    init: '',
  };

  const handleClickTab = (index: number) => {
    const newGeneratedLetterContents = generatedLetterContents.map((content, i) => ({
      ...content,
      isActive: i === index,
    }));
    setGeneratedLetterContents(newGeneratedLetterContents);
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    // setValue(e.target.value);
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

  return (
    <div className="p-10">
      <ResultContent
        tabs={tabs}
        onClickTab={handleClickTab}
        onChangeTextarea={handleChangeTextarea}
        text={textLookup[status]}
        disabled={disabled}
        actions={<ResetButton onClick={handleClickResetButton} disabled={disabled} />}
      />
    </div>
  );
}

export default ResultPage;
