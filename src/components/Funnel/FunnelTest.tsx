import useFunnel from '../../hooks/useFunnel';

const steps = [
  'purpose',
  'type',
  'recipientCategory',
  'senderName',
  'recipientName',
  'contentDescription',
  'sentenceLength',
] as const;

export default function FunnelTest() {
  const [Funnel, setStep] = useFunnel(steps, 'purpose');

  return (
    <div>
      <Funnel>
        <Funnel.Step name="purpose">
          <button type="button" onClick={() => setStep('type')}>
            purpose
          </button>
        </Funnel.Step>
        <Funnel.Step name="type">
          <button type="button" onClick={() => setStep('recipientCategory')}>
            type
          </button>
        </Funnel.Step>
        <Funnel.Step name="recipientCategory">
          <button type="button" onClick={() => setStep('senderName')}>
            recipientCategory
          </button>
        </Funnel.Step>
        <Funnel.Step name="senderName">
          <button type="button" onClick={() => setStep('recipientName')}>
            senderName
          </button>
        </Funnel.Step>
        <Funnel.Step name="recipientName">
          <button type="button" onClick={() => setStep('contentDescription')}>
            recipientName
          </button>
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
    </div>
  );
}
