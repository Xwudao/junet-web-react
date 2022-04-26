import React, { FC } from 'react';
import { Spin } from '@douyinfe/semi-ui';

type ICmpLoading = {};
const CmpLoading: FC<ICmpLoading> = (props) => {
  console.log('cmpLoading render...');
  return (
    <Spin
      size={'large'}
      wrapperClassName={`w-full h-full flex items-center justify-center`}
      tip={`Loading...`}></Spin>
  );
};

export default CmpLoading;
