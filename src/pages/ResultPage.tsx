import { useState } from 'react';
import ResetButton from '../components/ResetButton';
import ResultContent from '../components/ResultContent';
import useLetter from '../hooks/useLetter';

const DUMMY_TABS = [{ label: '첫번째', isActive: true }];

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
  const { data, postUserData, status } = useLetter();
  const [tabs, setTabs] = useState(DUMMY_TABS);

  const handleClickTab = (index: number) => {
    // setValue(DUMMY_DATA[index]);
    setTabs((prev) => prev.map((tab, i) => ({ ...tab, isActive: i === index })));
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    // setValue(e.target.value);
  };
  return (
    <div className="p-10">
      <ResultContent
        tabs={tabs}
        onClickTab={handleClickTab}
        onChangeTextarea={handleChangeTextarea}
        text={status === 'loading' ? '로딩중..' : data}
        actions={
          <ResetButton
            onClick={() => {
              const newTabs = tabs.map((tab) => ({ ...tab, isActive: false }));
              setTabs([
                ...newTabs,
                {
                  label: '두번째',
                  isActive: true,
                },
              ]);
              postUserData(DUMMY_DATA);
            }}
            disabled={status === 'loading'}
          />
        }
      />
    </div>
  );
}

export default ResultPage;
