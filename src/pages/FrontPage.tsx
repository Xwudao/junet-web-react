import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@douyinfe/semi-ui';
import { useRecoilState } from 'recoil';
import { count } from '@/store/store';
type IFrontPage = {};
const FrontPage: FC<IFrontPage> = (props) => {
  console.log('frontPage render...');

  const nav = useNavigate();
  const [cs, setCs] = useRecoilState(count);
  return (
    <div>
      count: {cs}
      <Button
        onClick={() => {
          setCs(cs - 1);
        }}>
        -1
      </Button>
      <Button
        onClick={() => {
          setCs(cs + 1);
        }}>
        +1
      </Button>
      <hr />
      <h1 className={`text-primary`}>FrontPage</h1>
      <p>
        <Button
          onClick={() => {
            nav('/search');
          }}>
          Ok
        </Button>
      </p>
      <Outlet />
    </div>
  );
};

export default FrontPage;
