import React, { FC } from 'react';

import noAccess from '@/assets/illustrations/no-access.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@arco-design/web-react';
import { useAuth } from '@/providers/AuthProvider';
import Pager from '@/components/Pager';
import Text from '@/components/Text';
import Surface from '@/components/Surface';

type ILoginPage = {};
const LoginPage: FC<ILoginPage> = (props) => {
  console.log('loginPage render...');
  const nav = useNavigate();
  const { login } = useAuth();
  return (
    <Pager
      className={`kk dark:bg-black h-full flex flex-col justify-center items-center`}>
      <Surface className={`shadow rounded p-8 w-11/12 sm:w-150 flex sm:p-10`}>
        <img src={noAccess} alt="no access" className={`hidden sm:block w-1/2`} />
        <section className={`form space-y-4 w-full sm:w-1/2`}>
          <Text as={'h3'} className={`kk font-bold text-xl text-center mb-3`}>
            登录系统
          </Text>
          <Input placeholder={`用户名`}></Input>
          <Input placeholder={`密码`}></Input>
          <Input placeholder={`验证码`}></Input>
          <Button
            long
            type={`primary`}
            onClick={() => {
              login('admin', () => {});
              nav('/');
            }}>
            登录
          </Button>

          <section className={`flex space-x-3 items-center`}>
            <Link to="#" className={`text-blue-5`}>
              忘记密码？
            </Link>
            <Link to="/register" className={`text-blue-5`}>
              注册
            </Link>
            <Link to="/" className={`text-blue-5`}>
              返回首页
            </Link>
          </section>
        </section>
      </Surface>
    </Pager>
  );
};

export default LoginPage;
