import { useState, useMemo } from 'react';

import FunnelMain from '../components/Funnel-2/FunnelMain';
import FunnelStep from '../components/Funnel-2/FunnelStep';

import { NonEmptyArray, FunnelStepProps, FunnelProps } from '../components/Funnel-2/types';

const useFunnel = <Steps extends NonEmptyArray<string>>(_: Steps, defaultStep: Steps[number]) => {
  const [step, setStep] = useState(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        (props: Omit<FunnelProps<Steps>, 'step'>) => <FunnelMain step={step} {...props} />,
        {
          Step: (props: FunnelStepProps<Steps>) => <FunnelStep {...props} />,
        },
      ),
    [step],
  );

  return [FunnelComponent, setStep] as const;
};

export default useFunnel;
