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

    const response = await fetch(`${this.host}/testapp/v1/chat-completions/HCX-002`, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data;
  }
}

function action(params) {
  const method = params.__ow_method;

  const { person, CLOVA_STUDIO_HOST, CLOVA_STUDIO_API_KEY, NCP_GW_API_KEY } = params;

  const { message } = params.body;

  if (method === 'post') {
    const messages = [
      { role: 'system', content: message },
      { role: 'user', content: person },
    ];

    const requestData = {
      messages,
      topP: 0.8,
      topK: 0,
      maxTokens: 2070,
      temperature: 0.5,
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
