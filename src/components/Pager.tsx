import React, { FC, useMemo } from 'react';
import styled from '@emotion/styled';

type IPaper = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};
const Pager: FC<IPaper> = ({ as, children, className = '' }) => {
  console.log('paper render...');

  const Container = useMemo(() => styled(as ? as : 'section')``, [as]);
  return (
    <Container className={`bg-white dark:bg-black ${className}`}>{children}</Container>
  );
};

export default Pager;
