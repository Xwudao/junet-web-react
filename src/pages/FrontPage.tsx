import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Banner, Button } from '@douyinfe/semi-ui';
import { useRecoilState } from 'recoil';
import { countState } from '@/store/store';
import { useTheme } from '@/providers/ThemeProvider';
type IFrontPage = {};
const FrontPage: FC<IFrontPage> = (props) => {
  console.log('frontPage render...');

  const nav = useNavigate();
  const [count, setCount] = useRecoilState(countState);
  const { toggleTheme } = useTheme();
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
        <hr className={`my-3`} />
        <Button
          onClick={() => {
            nav('/search');
          }}>
          to Search Page
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default FrontPage;
