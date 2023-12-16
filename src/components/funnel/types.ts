export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface FunnelStepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  children: React.ReactNode;
}

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  step: Steps[number];
  children:
    | Array<React.ReactElement<FunnelStepProps<Steps>>>
    | React.ReactElement<FunnelStepProps<Steps>>;
}

export type StepProps = {
  onClickPrev: () => void;
  onClickNext: () => void;
};
