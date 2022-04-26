import React, { FC } from 'react';

type ISearchPage = {};
const SearchPage: FC<ISearchPage> = (props) => {
  console.log('searchPage render...');
  return <div className={`dark:text-white p-3`}>search page</div>;
};

export default SearchPage;
