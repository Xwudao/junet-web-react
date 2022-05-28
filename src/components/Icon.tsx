import React, { FC } from 'react';

type IIcon = {
  icon: string;
  className?: string | string[];
};
const Icon: FC<IIcon> = ({ icon, className }) => {
  return <i className={`${icon} ${className}`}></i>;
};

export default Icon;
