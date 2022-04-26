import React, { FC } from 'react';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  return <div>test index page</div>;
};

export default IndexPage;
