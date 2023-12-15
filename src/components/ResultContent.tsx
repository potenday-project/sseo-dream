import { useState } from 'react';
import Textarea from './Textarea';
import TabList from './TabList';
import ResetButton from './ResetButton';

const DUMMY_DATA = ['첫번째 글 내용 입니다', '두번째 글 내용 입니다', '세번째 글 내용 입니다'];
const DUMMY_TABS = [
  { label: '첫번째', isActive: true },
  { label: '두번째', isActive: false },
  { label: '세번째', isActive: false },
];
const isEditable = false;

function ResultContent() {
  const [tabs, setTabs] = useState(DUMMY_TABS);
  const [value, setValue] = useState(DUMMY_DATA[0]);

  const handleClickTab = (index: number) => {
    setValue(DUMMY_DATA[index]);
    setTabs((prev) => prev.map((tab, i) => ({ ...tab, isActive: i === index })));
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TabList
        tabs={tabs}
        onClick={handleClickTab}
        actions={
          <ResetButton
            onClick={() => {
              console.log('@click reset');
            }}
          />
        }
      />
      <Textarea value={value} onChange={handleChangeTextarea} isEditable={isEditable} />
    </>
  );
}

export default ResultContent;
