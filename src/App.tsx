import MediumCategories from './pages/MediumCategories';

function App() {
  return (
    <div>
      {/*<MediumCategories*/}
      {/*  selectedDataList={['업무목적', '인사/안부', '상사']}*/}
      {/*  title="어떤 글을 써드릴까요?"*/}
      {/*  sequence={1}*/}
      {/*  valueList={[*/}
      {/*    '기념일/명절',*/}
      {/*    '인사/안부',*/}
      {/*    '축하/감사',*/}
      {/*    '안내/공지',*/}
      {/*    '요청/제안',*/}
      {/*    '문의/답변',*/}
      {/*    '사과/수습',*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<MediumCategories*/}
      {/*  selectedDataList={['업무목적', '인사/안부', '상사']}*/}
      {/*  title="누구에게 쓰는 글일까요?"*/}
      {/*  sequence={2}*/}
      {/*  valueList={['상사', '동료', '거래처', '전사']}*/}
      {/*/>*/}
      {/*<MediumCategories*/}
      {/*  selectedDataList={['업무목적', '인사/안부', '상사']}*/}
      {/*  title="받는 분과 보내는 분의 성함을 적어주세요"*/}
      {/*  subTitle="선택"*/}
      {/*  sequence={3}*/}
      {/*  hasName*/}
      {/*/>*/}
      {/*<MediumCategories*/}
      {/*  selectedDataList={['업무목적', '인사/안부', '상사']}*/}
      {/*  title="쓰려는 내용의 키워드를 설명해주세요"*/}
      {/*  sequence={4}*/}
      {/*  hasKeyword*/}
      {/*/>*/}
      <MediumCategories
        selectedDataList={['업무목적', '인사/안부', '상사']}
        title="어느정도 길이로 적어드릴까요?"
        sequence={5}
        sizeList={['짧게', '중간', '길게']}
      />
    </div>
  );
}

export default App;
