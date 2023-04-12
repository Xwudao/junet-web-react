import React, { FC } from 'react';
import Pager from '@/components/Pager';

type IPageLoading = { text?: string };
const PageLoading: FC<IPageLoading> = ({ text }) => {
  console.log('pageLoading render...');
  return (
    <Pager
      as={`section`}
      className={`dark:bg-black z-30 h-screen w-screen text-center flex justify-center items-center flex-col`}>
      <i className="i-eos-icons-loading text-4xl text-primary"></i>
      <span className={`text-primary mt-1`}>{text ? text : 'Loading...'}</span>
    </Pager>
  );
};

export default PageLoading;
