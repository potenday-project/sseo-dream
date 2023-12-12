import { useState } from 'react';

import axios from 'axios';

import './App.css';

export default function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');

  console.log(import.meta.env.VITE_CLOVASTUDIO_HOST);

  const fetchData = async (message: string) => {
    setIsLoading(true);
    const responseData = await axios.post(
      'https://ifofflnpn5.apigw.ntruss.com/open_api/oepn_api_prod/info/json',
      { body: { message } },
      { params: { person: 'friends' } },
    );

    console.log(responseData);

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
