export const TAB_LABEL = ['첫번째', '두번째', '세번째'];

export const TOAST_MESSAGE = {
  SUCCESS: { title: '글을 복사했어요', desc: '' },
  ERROR: { title: '알 수 없는 에러가 발생 하였습니다.', desc: '' },
  WARNING: { title: '답변은 최대 3개까지 받을 수 있어요', desc: '' },
};

export const PURPOSES = [
  { content: '업무', svgName: 'working' },
  { content: '개인', svgName: 'personal' },
] as const;
