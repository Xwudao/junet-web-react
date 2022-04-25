import React, { FC } from 'react';

type ISearchPage = {};
const SearchPage: FC<ISearchPage> = (props) => {
  console.log('searchPage render...');
  return <div>search page</div>;
};

export default SearchPage;
