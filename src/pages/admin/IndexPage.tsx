import React, { FC } from 'react';

type IAdminIndex = {};
const IndexPage: FC<IAdminIndex> = (props) => {
  console.log('indexPage render...');
  return <div>AdminIndexPage</div>;
};

export default IndexPage;
