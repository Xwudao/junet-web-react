import React, { FC } from 'react';
import styled from '@emotion/styled';

type IPaper = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string | string[];
};
const Paper: FC<IPaper> = ({ as, children, className }) => {
  console.log('paper render...');

  const Container = styled(as ? as : 'section')``;
  return (
    <Container className={`bg-white dark:bg-black ${className}`}>{children}</Container>
  );
};

export default Paper;
