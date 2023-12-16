import { useState, useMemo } from 'react';

import FunnelMain from '../components/funnel/FunnelMain';
import FunnelStep from '../components/funnel/FunnelStep';

import { NonEmptyArray, StepProps, FunnelProps } from '../components/funnel/types';

const useFunnel = <Steps extends NonEmptyArray<string>>(_: Steps, defaultStep: Steps[number]) => {
  const [step, setStep] = useState(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        (props: Omit<FunnelProps<Steps>, 'step'>) => <FunnelMain step={step} {...props} />,
        {
          Step: (props: StepProps<Steps>) => <FunnelStep {...props} />,
        },
      ),
    [step],
  );

  return [FunnelComponent, setStep] as const;
};

export default useFunnel;
