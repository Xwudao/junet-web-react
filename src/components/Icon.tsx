import React, { FC } from 'react';
import Text from '@/components/Text';

type IIcon = {
  icon: string;
  className?: string;
  colorName?: string;
  onClick?: () => void;
};
const Icon: FC<IIcon> = ({ icon, onClick, colorName = '', className = '' }) => {
  return (
    <i
      className={`${icon} ${className} ${
        colorName !== '' ? colorName : 'dark:text-white-gray'
      }`}
      onClick={onClick}
    />
  );
};

export default Icon;
