import { useState } from 'react';

import { EventData } from '../types/clova';
import { UserSelectionResult } from '../stores/letter';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

function parseData(data?: string) {
  if (!data) return '';

  try {
    return JSON.parse(data.replaceAll('\n', '\\n'));
  } catch (e) {
    return '';
  }
}

function parseEventStreamMessage(eventString: string) {
  const dataList: EventData[] = [];
  const events = eventString.split(/(?=id:)/);

  events.forEach((event) => {
    if (!event) return;

    const idMatch = event.match(/id:(.*)/)?.[1]?.trim();
    const eventMatch = event.match(/event:(.*)/)?.[1]?.trim();
    const dataMatch = event.match(/data:([\s\S]*)/)?.[1]?.trim();

    const eventData = {
      id: idMatch,
      event: eventMatch,
      data: parseData(dataMatch),
    };

    dataList.push(eventData as EventData);
  });
  return dataList;
}

type Status = 'init' | 'loading' | 'writing' | 'complete' | 'error';

function useLetter() {
  const [data, setData] = useState<EventData[]>([]);
  const [status, setStatus] = useState<Status>('init');

  const postUserData = async (userData: UserSelectionResult & { beforeMessages?: string[] }) => {
    setData([]);
    setStatus('loading');
    try {
      const decoder = new TextDecoder();
      const response = await fetch(`${API_BASE_URL}/api/letter`, {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

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
          .map((messageData) => messageData.data.message?.content || '')
          .join('');

  return {
    data: returnData,
    postUserData,
    status,
  };
}

export default useLetter;
