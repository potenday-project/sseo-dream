export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const apiUrl = process.env.CLOVA_API_URL;
  const apiHeaders = {
    'X-NCP-CLOVASTUDIO-API-KEY': process.env.CLOVA_API_KEY,
    'X-NCP-APIGW-API-KEY': process.env.CLOVA_API_GW_KEY,
    'X-NCP-CLOVASTUDIO-REQUEST-ID': process.env.CLOVA_STUDIO_REQUEST_ID,
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
    letterSentence, // 문장 길이 !! ['짧은 글', '중간 글', '긴 글']
    beforeMessages,
  } = userData;

  const letterSentenceMap = {
    '짧은 글': 100,
    '중간 글': 300,
    '긴 글': 500,
  };

  const beforeMessagesData =
    beforeMessages?.map((message) => ({
      role: 'assistant',
      content: message,
    })) ?? [];

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
      content: `편지를 써줘 편지길이는 총 ${letterSentenceMap[letterSentence]}글자로 적어줘`,
    },
    ...beforeMessagesData,
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
