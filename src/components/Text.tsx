import React, { FC } from 'react';
import styled, { StyledTags } from '@emotion/styled';

type IText = {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string | string[];
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Text: FC<IText> = ({ as, children, onClick, className }) => {
  console.log('text render...');
  const Container = styled(as ? as : 'p')``;
  return (
    <Container className={`dark:text-whiteGray ${className}`} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Text;
