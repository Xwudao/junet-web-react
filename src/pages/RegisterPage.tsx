import React, { FC } from 'react';

import wait from '@/assets/illustrations/wait.svg';
import styles from './styles/login.module.scss';
import { Button, Input } from '@douyinfe/semi-ui';
type IRegisterPage = {};
const RegisterPage: FC<IRegisterPage> = (props) => {
  console.log('registerPage render...');
  return (
    <div className={`dark:bg-dark h-screen w-screen flex items-center justify-center`}>
      <div className={styles.loginWrapper}>
        <img className={styles.img} src={wait} alt="waiting" />
        <div className={styles.login}>
          <h3 className={`font-bold dark:text-white text-2xl mb-5 text-center`}>
            欢迎注册
          </h3>
          <div className={styles.form}>
            <Input
              prefix={<i className="i-ri-user-4-line text-xl mx-2"></i>}
              placeholder="请输入用户名"
              size={`large`}
            />
            <Input
              prefix={<i className="i-mdi-key-variant text-lg mx-2"></i>}
              placeholder="请输入密码"
              size={`large`}
            />
            <Input
              prefix={<i className="i-ic-baseline-verified text-lg mx-2"></i>}
              placeholder="请输入验证码"
              size={`large`}
            />
            <Button type="primary" size="large" theme={`solid`} block>
              注册
            </Button>

            <p className={`text-sm dark:text-white`}>
              已经有账号？
              <a href="#/login" className={`text-blue-600`}>
                点击登录
              </a>
              <a href="#" className={`text-blue-600 ml-3`}>
                返回首页
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
