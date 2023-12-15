export type EventData = {
  id: string;
  event: 'signal' | 'token' | 'error' | 'result';
  data: {
    message: {
      role: string;
      content: string;
    };
    index: number;
    inputLength: number;
    outputLength: number;
    stopReason: string;
  };
};
