import { PropsWithChildren } from 'react';

export function MediumCategoryWrapper({ children }: PropsWithChildren) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}

type WrapperProps = {
  className: string;
};

export function Wrapper({ children, className }: PropsWithChildren<WrapperProps>) {
  return <div className={className}>{children}</div>;
}
