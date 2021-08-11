import React, { ReactNode } from 'react';

type CDTSectionProps = {
  header: string;
  children: ReactNode;
};

export const CDTSection = ({
  header,
  children,
}: CDTSectionProps): JSX.Element => {
  return (
    <div className="pt-20 mx-auto">
      <h1 className="pb-10 text-5xl font-bold max-w-6xl mx-auto">{header}</h1>
      {children}
    </div>
  );
};

export default CDTSection;
