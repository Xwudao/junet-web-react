import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@douyinfe/semi-ui';

type IFrontPage = {};
const FrontPage: FC<IFrontPage> = (props) => {
  console.log('frontPage render...');
  const nav = useNavigate();
  return (
    <div>
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
