import React, { FC } from 'react';

type ILoginPage = {};
const LoginPage: FC<ILoginPage> = (props) => {
  console.log('loginPage render...');
  return <div>loginPage</div>;
};

export default LoginPage;
