import React, { ReactNode } from 'react';

type EmphasizeInfoProps = {
  children: ReactNode;
};

const Emphasize = ({ children }: EmphasizeInfoProps): JSX.Element => (
  <span className="text-sdsu-red">{children}</span>
);

export default Emphasize;
