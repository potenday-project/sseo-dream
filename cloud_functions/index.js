/* eslint-disable */
const fetch = require('node-fetch');

class CompletionExecutor {
  constructor(host, clovaStudioApiKey, ncpGWApiKey, requestId) {
    this.host = host;
    this.clovaStudioApiKey = clovaStudioApiKey;
    this.ncpGWApiKey = ncpGWApiKey;
    this.requestId = requestId;
  }

  async execute(requestData) {
    const headers = {
      'X-NCP-CLOVASTUDIO-API-KEY': this.clovaStudioApiKey,
      'X-NCP-APIGW-API-KEY': this.ncpGWApiKey,
      'X-NCP-CLOVASTUDIO-REQUEST-ID': this.requestId,
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(`${this.host}/testapp/v1/chat-completions/HCX-002`, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

function action(params) {
  const method = params.__ow_method;

  const { body, CLOVA_STUDIO_HOST, CLOVA_STUDIO_API_KEY, NCP_GW_API_KEY } = params;
  const { userData } = body;
  const {
    purpose, // 글의 목적 [string]
    type, // 글의 유형 !! [string]
    recipientCategory, // 받는 사람의 카테고리 !! [string]
    senderName, // 보내는 사람의 이름 !! [string]
    recipientName, // 받는 사람의 이름 !! [string]
    contentDescription, // 쓰려는 내용의 설명 [string]
    sentenceLength, // 문장 길이 !! [number]
  } = userData;

  // 아래 내용으로 프롬프팅을 만들어야하는데 클라이언트에서 데이터를 어떻게 받는게 좋을까 ??

  // 어떤 목적으로 글을 써드릴까요? => 개인 or 업무
  // 어떤 글을 써드릴까요? => 기념일/명절, 인사/안부, 축하/감사, 안내/공지, 요청/제안, 문의/답변, 사과/수급, 그외
  // 누구에게 쓰는 글인가요? => 상사, 동료, 거래처, 전사, 그외
  // 받는 분과 보내는 분의 성함을 적어주세요 (선택) => 받는 분, 보내는 분
  // 쓰려는 내용을 설명해 주세요 => 쓰고 싶은 내용들..
  // 몇문장으로 적어드릴까요? => 10문장 이내, 30문장 이내, 50문장 이내, 100문장 이내, 그외

  // 받은 정보를 기준으로 "헤커톤으로 고생하는 팀원들에게 고생한다는 격려의 편지를 써줘"을 참고해서 편지를 써줘 편지 길이는 30문장 내외로 적어줘

  if (method === 'post') {
    const messages = [
      { role: 'system', content: `글의 목적: ${purpose}` },
      { role: 'system', content: `글의 유형: ${type}` },
      { role: 'system', content: `대상: ${recipientCategory}` },
      { role: 'system', content: `받는 분: ${recipientName}, 보내는 분: ${senderName}` },
      {
        role: 'user',
        content: `받은 정보를 기준으로 "${contentDescription}"을 참고해서 편지를 써줘 편지 길이는 ${sentenceLength}문장 내외로 적어줘`,
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

    const completionExecutor = new CompletionExecutor(
      CLOVA_STUDIO_HOST,
      CLOVA_STUDIO_API_KEY,
      NCP_GW_API_KEY,
      'c5e2dd41c8374950bd8803c1d1989ec3',
    ).execute(requestData);

    return completionExecutor;
  }
}

exports.main = action;
