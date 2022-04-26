import React, { FC } from 'react';
import { Spin } from '@douyinfe/semi-ui';

type ICmpLoading = { text?: string };
const CmpLoading: FC<ICmpLoading> = ({ text }) => {
  console.log('cmpLoading render...');
  return (
    <div
      className={`z-30 h-full w-full text-center flex justify-center items-center flex-col`}>
      <i className="i-eos-icons-loading text-4xl text-primary"></i>
      <span className={`text-primary mt-1`}>{text ? text : 'Loading...'}</span>
    </div>
  );
};

export default CmpLoading;
