import { NonEmptyArray, StepProps } from './types';

function FunnelStep<Steps extends NonEmptyArray<string>>({ children }: StepProps<Steps>) {
  return <>{children}</>;
}

export default FunnelStep;
