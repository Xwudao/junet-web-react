import React, { FC, PropsWithChildren, useMemo } from 'react';

type IIconButton = {
  icon: string;
  size?: 'large' | 'medium' | 'small' | 'mini';
  colorName?: string;
  className?: string;
  onClick?: () => void;
};
const IconButton: FC<PropsWithChildren<IIconButton>> = ({
  icon,
  size = 'medium',
  className = '',
  colorName = '',
  onClick = () => {},
}) => {
  console.log('iconButton render...');
  const sizeClass = useMemo(() => {
    switch (size) {
      case 'small':
        return 'text-sm w-5 h-5';
      case 'medium':
        return 'text-base w-7 h-7';
      case 'large':
        return 'text-lg w-9 h-9';
      case 'mini':
        return 'text-xs w-3 h-3';
    }
  }, [size]);

  const btnClass = `rd cursor-pointer hover:bg-gray-1 hover:dark:bg-gray-4/20 p-1`;

  const color = colorName ? colorName : 'dark:text-white-gray';

  return (
    <span className={`${btnClass} ${className}`} onClick={onClick}>
      <i className={` ${icon} ${sizeClass} ${color}`}></i>
    </span>
  );
};

export default IconButton;
