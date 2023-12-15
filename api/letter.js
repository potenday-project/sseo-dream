export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const apiUrl = 'https://clovastudio.stream.ntruss.com/testapp/v1/chat-completions/HCX-002';
  const apiHeaders = {
    'X-NCP-CLOVASTUDIO-API-KEY':
      'NTA0MjU2MWZlZTcxNDJiY6mHH42Cjo7EvOFNeUOFYQQrLkq7gwAGE2vyPIBIL6Mzye6cmY6Yarg06Ou7TGIobQI6/zXB+7mZsW4eB+GAQiH6QG9QdWNbmjHwy1fX/eEUTE/6sTTEwMOnfhr2gfg/nQPYpKSuJJ3VdnOhU8bCrZOlYRropXGWZZ7O9gtd9x7HPdSlKvitjI+CR3mhbiH4Xy+TIaYQz46dlSpUJgckkls=',
    'X-NCP-APIGW-API-KEY': 'fwc41Q4gKDC6MOwyL8p5NhKg4yLldocu3O093o3Y',
    'X-NCP-CLOVASTUDIO-REQUEST-ID': 'f3ccf427cf1d4106a85f6f22109c3b76',
    'Content-Type': 'application/json',
    Accept: 'text/event-stream',
  };

  const userData = await req.json();

  const {
    purpose, // 글의 목적 [string]
    type, // 글의 유형 !! [string]
    recipientCategory, // 받는 사람의 카테고리 !! [string]
    senderName, // 보내는 사람의 이름 !! [string]
    recipientName, // 받는 사람의 이름 !! [string]
    contentDescription, // 쓰려는 내용의 설명 [string]
    sentenceLength, // 문장 길이 !! [number]
  } = userData;

  const messages = [
    { role: 'system', content: `글의 목적: ${purpose}적인 편지` },
    { role: 'system', content: `글의 유형: ${type}` },
    { role: 'system', content: `대상과의 관계 (예: 친구, 가족, 동료 등): ${recipientCategory}` },
    {
      role: 'system',
      content: `받는 사람 이름(혹은 회사명): ${recipientName}, 보내는 사람 이름(혹은 회사명): ${senderName}`,
    },
    { role: 'system', content: `쓰려는 내용의 설명: ${contentDescription}` },
    {
      role: 'user',
      content: `편지를 써줘 편지길이는 총 ${sentenceLength}글자로 적어줘`,
    },
  ];

  const requestData = {
    messages,
    topP: 0.8,
    topK: 0,
    maxTokens: 2070,
    temperature: 0.8,
    repeatPenalty: 5.0,
    stopBefore: [],
    includeAiFilters: true,
  };
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: apiHeaders,
    body: JSON.stringify(requestData),
  });

  return new Response(response.body, {
    headers: { 'Content-Type': 'text/event-stream' },
  });
}
