import React, { FC } from 'react';

import noAccess from '@/assets/illustrations/no-access.svg';
import styles from './styles/login.module.scss';
import { Button, Input } from '@douyinfe/semi-ui';
import { useAuth } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

type ILoginPage = {};
const LoginPage: FC<ILoginPage> = (props) => {
  console.log('loginPage render...');
  const nav = useNavigate();
  const { login } = useAuth();
  return (
    <div className={`dark:bg-dark h-screen w-screen flex items-center justify-center`}>
      <div className={styles.loginWrapper}>
        <img className={`${styles.img} show-in-pc`} src={noAccess} alt="waiting" />
        <div className={styles.login}>
          <h3 className={`font-bold dark:text-white text-2xl mb-5 text-center`}>
            欢迎登录
          </h3>
          <div className={styles.form}>
            <Input
              prefix={<i className="i-ph-user text-xl mx-2"></i>}
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
            <Button
              type="primary"
              size="large"
              theme={`solid`}
              block
              onClick={() => {
                login('username', () => {
                  nav(-1);
                });
              }}>
              登录
            </Button>

            <p className={`text-sm dark:text-white`}>
              还没有账号？
              <a href="#/register" className={`text-blue-600`}>
                点击注册
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

export default LoginPage;
