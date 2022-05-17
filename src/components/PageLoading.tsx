import React, { FC } from 'react';
import { styled } from '@mui/material';

type IPageLoading = { text?: string };

const I = styled(`i`)(
  ({ theme }) => `
    font-size: ${theme.spacing(4)};
    color: ${theme.palette.primary.main};
  `,
);
const Span = styled(`span`)(
  ({ theme }) => `
    font-size: ${theme.spacing(2)};
    color: ${theme.palette.primary.main};
  `,
);
const PageLoading: FC<IPageLoading> = ({ text }) => {
  console.log('pageLoading render...');
  return (
    <div
      className={`z-30 h-screen w-screen text-center flex justify-center items-center flex-col`}>
      <I className="i-eos-icons-loading"></I>
      <Span>{text ? text : 'Loading...'}</Span>
    </div>
  );
};

export default PageLoading;
