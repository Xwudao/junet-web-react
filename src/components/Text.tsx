import React, { FC, useMemo } from 'react';
import styled, { StyledTags } from '@emotion/styled';

type IText = {
  children?: React.ReactNode;

  size?: 'large' | 'medium' | 'small' | 'mini';
  as?: keyof JSX.IntrinsicElements;
  colorName?: string;
  className?: string | string[];
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Text: FC<IText> = ({
  as,
  children,
  colorName,
  size = 'medium',
  onClick,
  className,
}) => {
  console.log('text render...');
  const Container = useMemo(() => styled(as ? as : 'p')``, [as]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      case 'mini':
        return 'text-xs';
    }
  }, [size]);

  return (
    <Container
      className={`${sizeClass} ${className} ${
        colorName ? colorName : 'dark:text-white-gray'
      }`}
      onClick={onClick}>
      {children}
    </Container>
  );
};

export default Text;
