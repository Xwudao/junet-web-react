import React, { FC } from 'react';
import routes from '@/router/routers';

type IAppRoute = {};
const AppRoutesConfig: FC<IAppRoute> = (props) => {
  console.log('appRoute render...');
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default AppRoutesConfig;
