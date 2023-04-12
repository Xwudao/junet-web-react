import React, { FC } from 'react';

import wait from '@/assets/illustrations/wait.svg';
import { Button, Input } from '@arco-design/web-react';

import { Link } from 'react-router-dom';
import Pager from '@/components/Pager';
import Text from '@/components/Text';
import Surface from '@/components/Surface';
type IRegisterPage = {};
const RegisterPage: FC<IRegisterPage> = (props) => {
  console.log('registerPage render...');
  return (
    <Pager className={`dark:bg-black h-full flex flex-col justify-center items-center`}>
      <Surface className={`shadow rounded p-10 w-11/12 sm:w-150 flex sm:p-10`}>
        <img src={wait} alt="no access" className={`hidden sm:block w-1/2`} />
        <section className={`form space-y-5 w-full sm:w-1/2`}>
          <Text as={`h3`} className={`font-bold text-xl text-center mb-3`}>
            注册账号
          </Text>
          <Input placeholder={`用户名`}></Input>
          <Input placeholder={`密码`}></Input>
          <Input placeholder={`验证码`}></Input>
          <Button long type={`primary`}>
            注册
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
      </Surface>
    </Pager>
  );
};

export default RegisterPage;
