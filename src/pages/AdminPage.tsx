import React, { FC } from 'react';


type IAdminPage = {};
const AdminPage: FC<IAdminPage> = (props) => {
 console.log('adminPage render...');
 return (
  <div>
   admin
  </div>
 );
};

export default AdminPage;
