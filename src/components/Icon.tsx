import React, { FC } from 'react';
import Text from '@/components/Text';

type IIcon = {
  icon: string;
  className?: string | string[];
  autoMode?: boolean;
  onClick?: () => void;
};
const Icon: FC<IIcon> = ({ icon, onClick, autoMode = false, className }) => {
  if (autoMode) {
    return <Text as={`i`} className={`${icon} ${className}`} onClick={onClick} />;
  }
  return <i className={`${icon} ${className}`} onClick={onClick} />;
};

export default Icon;
