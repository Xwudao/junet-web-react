import React, { FC, PropsWithChildren } from 'react';

type ISurface = {
  className?: string;

  children: React.ReactNode;
};
const Surface: FC<PropsWithChildren<ISurface>> = ({ className = '', children }) => {
  return <div className={`bg-white dark:bg-[#232324] ${className}`}>{children}</div>;
};

export default Surface;
