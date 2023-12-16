import Step1 from './Step1';
import PurposeList from '../purpose/PurposeButtons';

import useFunnel from '../../hooks/useFunnel';
import Step2 from './Step2';
import PrevNextButtons from '../PrevNextButtons';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const steps = [
  'purpose',
  'type',
  'recipientCategory',
  'senderName',
  'recipientName',
  'contentDescription',
  'sentenceLength',
] as const;
export default function LetterFunnel() {
  const [Funnel, setStep] = useFunnel(steps, 'purpose');

  return (
    <Funnel>
      <Funnel.Step name="purpose">
        <Step1>
          <PurposeList
            onClickNext={() => {
              setStep('type');
            }}
          />
        </Step1>
      </Funnel.Step>
      <Funnel.Step name="type">
        <Step2>
          <PrevNextButtons
            onClickPrev={() => setStep('purpose')}
            onClickNext={() => setStep('recipientCategory')}
          />
        </Step2>
      </Funnel.Step>
      <Funnel.Step name="recipientCategory">
        <Step3>
          <PrevNextButtons
            onClickPrev={() => setStep('type')}
            onClickNext={() => setStep('senderName')}
          />
        </Step3>
      </Funnel.Step>
      <Funnel.Step name="senderName">
        <Step4>
          <PrevNextButtons
            onClickPrev={() => setStep('recipientCategory')}
            onClickNext={() => setStep('recipientName')}
          />
        </Step4>
      </Funnel.Step>
      <Funnel.Step name="recipientName">
        <Step5>
          <PrevNextButtons
            onClickPrev={() => setStep('senderName')}
            onClickNext={() => setStep('contentDescription')}
          />
        </Step5>
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
