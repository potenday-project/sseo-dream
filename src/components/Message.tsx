import useMessage from '../hooks/useMessage';

const DUMMY_DATA = {
  contentDescription: '나는 헤커톤을 진행하고 있는 동료들에게 응원의 글을 쓰고 싶어',
  purpose: '개인',
  recipientCategory: '동료',
  recipientName: '동료들에게',
  senderName: '조효형',
  sentenceLength: 10,
  type: '축하/감사',
} as const;

const statusText = {
  init: 'init',
  loading: '로딩중..',
  writing: '작성중...',
  complete: '작성완료!',
  error: '에러 발생!',
} as const;

function Message() {
  const { data, postUserData, status } = useMessage();
  return (
    <div>
      <button
        type="button"
        onClick={() => postUserData(DUMMY_DATA)}
        className="p-[10px] border rounded-lg">
        데이터 요청~~
      </button>
      {status !== 'init' && <div>{statusText[status]}</div>}
      {data && <div dangerouslySetInnerHTML={{ __html: data }} className="whitespace-pre-wrap" />}
    </div>
  );
}

export default Message;
