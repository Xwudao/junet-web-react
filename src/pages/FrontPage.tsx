import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

type IFrontPage = {};
const FrontPage: FC<IFrontPage> = (props) => {
  console.log('frontPage render...');
  const nav = useNavigate();
  return (
    <div>
      front
      <p>
        <button
          onClick={() => {
            nav('/search');
          }}>
          to search
        </button>
      </p>
      <Outlet />
    </div>
  );
};

export default FrontPage;
