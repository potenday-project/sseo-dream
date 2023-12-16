import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';

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
        <Step3 onClickPrev={() => setStep('type')} onClickNext={() => setStep('Names')} />
      </Funnel.Step>
      <Funnel.Step name="Names">
        <Step4
          onClickPrev={() => setStep('recipientCategory')}
          onClickNext={() => setStep('contentDescription')}
        />
      </Funnel.Step>
      <Funnel.Step name="contentDescription">
        <Step5 onClickPrev={() => setStep('Names')} onClickNext={() => setStep('letterSentence')} />
      </Funnel.Step>
      <Funnel.Step name="letterSentence">
        <Step6
          onClickPrev={() => setStep('contentDescription')}
          onClickNext={() => setStep('loader')}
        />
      </Funnel.Step>
      <Funnel.Step name="loader">
        <Step7
          onClickPrev={() => setStep('letterSentence')}
          onClickNext={() => setStep('result')}
        />
      </Funnel.Step>
      <Funnel.Step name="result">
        <Step8
          onClickPrev={() => setStep('letterSentence')}
          onClickNext={() => setStep('purpose')}
        />
      </Funnel.Step>
    </Funnel>
  );
}
