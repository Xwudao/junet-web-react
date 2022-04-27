import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

type IAdminPage = {};
const AdminPage: FC<IAdminPage> = (props) => {
  console.log('adminPage render...');
  return <Outlet />;
};

export default AdminPage;
