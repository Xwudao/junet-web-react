import React, { FC } from 'react';
import Paper from '@/components/Paper';

type ICmpLoading = { text?: string };
const CmpLoading: FC<ICmpLoading> = ({ text }) => {
  console.log('cmpLoading render...');
  return (
    <Paper
      as={`section`}
      className={`dark:bg-black z-30 h-full w-full text-center flex justify-center items-center flex-col`}>
      <i className="i-eos-icons-loading text-4xl text-primary"></i>
      <span className={`text-primary mt-1`}>{text ? text : 'Loading...'}</span>
    </Paper>
  );
};

export default CmpLoading;
