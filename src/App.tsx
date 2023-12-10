import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');

  const fetchData = async (message: string) => {
    setIsLoading(true);
    const responseData = await axios.post('https://1x2ep04v87.apigw.ntruss.com/test/hh-test/rFI3X7i7x7/json', {
      body: {
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        maxTokens: 2048,
      },
      headers: {
        'Content-Type': 'text/stream',
        'X-NCP-CLOVASTUDIO-API-KEY':
          'NTA0MjU2MWZlZTcxNDJiY25sZ68/c8HYjZvTffUOPq1/Hqp+MWTF3kFsGPPtDnLpp1yw5+wTxZDwAtBYdWCtZNoOHxIOXF8OVN0sRur81hsRzuiJ2dXbkjCofAG06yO/VER2WXjtfM6t9F7NfYEljdEURHMdIl8gItT8VZSYYgQRBUvbLmTSMdmGsc4n6TmTrSI4/VajPXlEcWAmv1JGwcjqBC/ptE3z8Ja+Sg6OxqY=',
        'X-NCP-APIGW-API-KEY': 'fwc41Q4gKDC6MOwyL8p5NhKg4yLldocu3O093o3Y',
        'X-NCP-CLOVASTUDIO-REQUEST-ID': '904c68b46fd24443b51be9245293b352',
      },
    });

    setData(responseData);
    setIsLoading(false);
  };

  const handleClickButton = async () => {
    await fetchData(value);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="질문입력" onChange={(e) => setValue(e.target.value)} />
        <button type="button" onClick={handleClickButton}>
          질문
        </button>
        <button
          type="button"
          onClick={() => {
            setValue('');
            setData({});
          }}
        >
          초기화
        </button>
      </div>
      <div>{isLoading ? '답변중...' : `답변: ${data?.data?.result?.message?.content ?? ''}`}</div>
    </>
  );
}

export default App;
