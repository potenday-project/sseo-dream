import { useState } from 'react';
import { EventData } from '../types/clova';
import { UserData } from '../types/userData';

function parseData(data: string) {
  try {
    return JSON.parse(data.replaceAll('\n', '\\n'));
  } catch (e) {
    return '';
  }
}

function parseEventStreamMessage(eventString: string) {
  const dataList: EventData[] = [];
  const events = eventString.split('\n\n'); // 이벤트별로 분리

  events.forEach((event) => {
    if (!event) return;

    const eventData = {
      id: event.match(/id:(.*)/)?.[1]?.trim(),
      event: event.match(/event:(.*)/)?.[1]?.trim(),
      data: parseData(event.split('data:')?.[1]),
    };

    dataList.push(eventData as EventData);
  });
  return dataList;
}

type Status = 'init' | 'loading' | 'writing' | 'complete' | 'error';

function useMessage() {
  const [data, setData] = useState<EventData[]>([]);
  const [status, setStatus] = useState<Status>('init');

  const postUserData = async (userData: UserData) => {
    setData([]);
    setStatus('loading');
    try {
      const decoder = new TextDecoder();
      const response = await fetch('http://localhost:3000/api/test', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      const reader = response.body!.getReader();
      let done = false;
      while (!done) {
        setStatus('writing');
        // eslint-disable-next-line no-await-in-loop
        const { value, done: doneReading } = await reader!.read();
        done = doneReading;
        const decodeData = decoder.decode(value);
        const dataList = parseEventStreamMessage(decodeData);
        setData((p) => [...p, ...dataList]);
      }
      const isError = data.find((messageData) => messageData.event === 'error');

      if (isError) {
        setStatus('error');
        return;
      }

      setStatus('complete');
    } catch (e) {
      setStatus('error');
    }
  };

  const returnData =
    status === 'complete'
      ? data.find((messageData) => messageData.event === 'result')?.data.message.content
      : data
          .filter((messageData) => messageData.event === 'token')
          .map((messageData) => messageData.data.message.content)
          .join('');

  return {
    data: returnData,
    postUserData,
    status,
  };
}

export default useMessage;
