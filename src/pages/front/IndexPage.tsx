import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countState } from '@/store/store';
import { useAuth } from '@/providers/AuthProvider';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const [count, setCount] = useRecoilState(countState);
  const { user, logout } = useAuth();
  return (
    <div className={`h-full w-full dark:bg-dark`}>

      <Outlet />
    </div>
  );
};

export default IndexPage;
