import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import useFunnel from '../../hooks/useFunnel';

import { STEPS } from '../../constants/result';

export default function LetterFunnel() {
  const [Funnel, setStep] = useFunnel(STEPS, 'purpose');

  return (
    <Funnel>
      <Funnel.Step name="purpose">
        <Step1
          onClickNext={() => {
            setStep('type');
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="type">
        <Step2
          onClickPrev={() => setStep('purpose')}
          onClickNext={() => setStep('recipientCategory')}
        />
      </Funnel.Step>
      <Funnel.Step name="recipientCategory">
        <Step3 onClickPrev={() => setStep('type')} onClickNext={() => setStep('senderName')} />
      </Funnel.Step>
      <Funnel.Step name="senderName">
        <Step4
          onClickPrev={() => setStep('recipientCategory')}
          onClickNext={() => setStep('recipientName')}
        />
      </Funnel.Step>
      <Funnel.Step name="recipientName">
        <Step5
          onClickPrev={() => setStep('senderName')}
          onClickNext={() => setStep('contentDescription')}
        />
      </Funnel.Step>
      <Funnel.Step name="contentDescription">
        <button type="button" onClick={() => setStep('sentenceLength')}>
          contentDescription
        </button>
      </Funnel.Step>
      <Funnel.Step name="sentenceLength">
        <button type="button">sentenceLength</button>
      </Funnel.Step>
    </Funnel>
  );
}
