import React, { FC } from 'react';
import routes from '@/router/routers';
import { useRoutes } from 'react-router-dom';

type IAppRoute = {};
const AppRoutesConfig: FC<IAppRoute> = (props) => {
  console.log('appRoute render...');
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default AppRoutesConfig;
