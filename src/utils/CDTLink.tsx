import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

type CDTLinkProps = {
  className?: string;
  newTab?: boolean;
  internal?: boolean;
  to: string;
  children: ReactNode;
};

const CDTLink = ({
  className,
  newTab,
  internal,
  to,
  children,
}: CDTLinkProps): JSX.Element =>
  internal ? (
    <div className={className}>
      <Link to={to}>{children}</Link>
    </div>
  ) : (
    <a
      className={className}
      href={to}
      target={newTab ? '_blank' : ''}
      rel="noreferrer"
    >
      {children}
    </a>
  );

export default CDTLink;
