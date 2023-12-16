import { PropsWithChildren } from 'react';

import HeaderTags from '../header/HeaderTags';

export function MediumCategoryWrapper({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <HeaderTags />
      {children}
    </div>
  );
}

type WrapperProps = {
  className: string;
};

export function Wrapper({ children, className }: PropsWithChildren<WrapperProps>) {
  return <div className={className}>{children}</div>;
}
