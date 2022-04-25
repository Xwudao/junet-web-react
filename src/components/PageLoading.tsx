import React, { FC } from 'react';

type IPageLoading = {};
const PageLoading: FC<IPageLoading> = (props) => {
  console.log('pageLoading render...');
  return <div>loading</div>;
};

export default PageLoading;
