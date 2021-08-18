import React, { ReactNode } from 'react';

type CDTLinkProps = {
  className?: string;
  to: string;
  children: ReactNode;
};

const CDTLink = ({ className, to, children }: CDTLinkProps): JSX.Element => {
  return (
    <a className={className || ''} href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default CDTLink;
