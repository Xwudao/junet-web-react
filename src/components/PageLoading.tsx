import React, { FC } from 'react';
import { Spin } from '@douyinfe/semi-ui';

type IPageLoading = {};
const PageLoading: FC<IPageLoading> = (props) => {
  console.log('pageLoading render...');
  return (
    <Spin
      size={'large'}
      wrapperClassName={`h-screen w-screen flex items-center justify-center`}
      tip={`Loading...`}></Spin>
  );
};

export default PageLoading;
