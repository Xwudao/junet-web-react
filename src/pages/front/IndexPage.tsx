import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countState } from '@/store/store';
import { useTheme } from '@/providers/ThemeProvider';
import { Banner, Button } from '@douyinfe/semi-ui';
import { useAuth } from '@/providers/AuthProvider';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const [count, setCount] = useRecoilState(countState);
  const { toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  return (
    <div className={`h-full w-full dark:bg-dark`}>
      <Banner type={`success`} title={`测试：`} description={`你好`}></Banner>
      <div className={`p-3`}>
        <p className={`dark:text-white`}>count: {count}</p>
        <section className={`space-x-3 mt-3`}>
          {/*-1*/}
          <Button onClick={() => setCount(count - 1)}>-</Button>
          {/*+1*/}
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </section>
        <hr className={`my-3`} />
        <Button
          onClick={() => {
            toggleTheme();
          }}>
          Toggle Theme
        </Button>
        {user ? (
          <div className={`mt-3`}>
            <Button
              onClick={() => {
                logout(() => {});
              }}>
              Logout
            </Button>
          </div>
        ) : (
          <p className={`dark:text-white`}>You are not login</p>
        )}
        <span></span>
        <hr className={`my-3`} />
        <div className="bnts space-x-3">
          <Button
            onClick={() => {
              nav('/search');
            }}>
            to Search Page
          </Button>
          <Button
            onClick={() => {
              nav('/login');
            }}>
            to Login Page
          </Button>
          <Button
            onClick={() => {
              nav('/admin');
            }}>
            to Admin Page
          </Button>
          <Button
            onClick={() => {
              nav('/admin/test');
            }}>
            to Admin / test Page
          </Button>
        </div>
        <hr className={`my-3`} />
        <p className={`dark:text-white`}>Icon, use unocss/icons:</p>
        <div className={`space-x-3 my-3`}>
          <i className="i-mdi-alarm text-xl text-orange-400" />
          <i className={`i-eos-icons-bubble-loading text-primary text-xl`}></i>
          <i className={`i-eos-icons-loading text-primary text-xl`}></i>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default IndexPage;
