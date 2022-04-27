import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

type IFrontPage = {};
const FrontPage: FC<IFrontPage> = (props) => {
  console.log('frontPage render...');

  return <Outlet />;
};

export default FrontPage;
