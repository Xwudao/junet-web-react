import React, { FC } from 'react';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  return <div>admin test page</div>;
};

export default IndexPage;
