import { NonEmptyArray, FunnelStepProps } from './types';

function FunnelStep<Steps extends NonEmptyArray<string>>({ children }: FunnelStepProps<Steps>) {
  return <>{children}</>;
}

export default FunnelStep;
