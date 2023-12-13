export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  children: React.ReactNode;
}

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  step: Steps[number];
  children: Array<React.ReactElement<StepProps<Steps>>> | React.ReactElement<StepProps<Steps>>;
}
