import { Children, isValidElement } from 'react';

import type { FunnelProps, NonEmptyArray, StepProps } from './types';

export function FunnelMain<Steps extends NonEmptyArray<string>>({
  step,
  children,
}: FunnelProps<Steps>) {
  const validChildren = Children.toArray(children).filter(isValidElement);

  const targetStep = validChildren.find((child) => (child.props as StepProps<Steps>).name === step);

  return <>{targetStep}</>;
}

export default FunnelMain;
