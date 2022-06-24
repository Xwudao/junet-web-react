import React, { FC } from 'react';

import wait from '@/assets/illustrations/wait.svg';
import { Button, Input } from '@arco-design/web-react';

import { ContentWrapper, LoginWrapper } from '@/pages/styles/Login.style';
import { Link } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
type IRegisterPage = {};
const RegisterPage: FC<IRegisterPage> = (props) => {
  console.log('registerPage render...');
  return (
    <Paper className={`dark:bg-black h-full flex flex-col justify-center items-center`}>
      <LoginWrapper className={`shadow rounded p-5 w-11/12 sm:w-150 flex sm:p-5`}>
        <img src={wait} alt="no access" className={`hidden sm:block w-1/2`} />
        <section className={`form space-y-2 w-full sm:w-1/2`}>
          <Text as={`h3`} className={`font-bold text-lg text-center mb-3`}>
            注册账号
          </Text>
          <Input placeholder={`用户名`}></Input>
          <Input placeholder={`密码`}></Input>
          <Input placeholder={`验证码`}></Input>
          <Button long type={`primary`}>
            登录
          </Button>

          <section className={`flex space-x-3 items-center`}>
            <Link to="#" className={`text-blue-5`}>
              已有账号？
            </Link>
            <Link to="/login" className={`text-blue-5`}>
              点击登录
            </Link>
            <Link to="/" className={`text-blue-5`}>
              返回首页
            </Link>
          </section>
        </section>
      </LoginWrapper>
    </Paper>
  );
};

export default RegisterPage;
