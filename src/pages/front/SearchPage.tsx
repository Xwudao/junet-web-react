import React, { FC } from 'react';
import Pager from '@/components/Pager';
import Text from '@/components/Text';
import { Button } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';

type ISearchPage = {};
const SearchPage: FC<ISearchPage> = (props) => {
  console.log('searchPage render...');
  const nav = useNavigate();
  return (
    <Pager className={`w-full h-full`}>
      <Button
        onClick={() => {
          nav(-1);
        }}>
        Back to
      </Button>
    </Pager>
  );
};

export default SearchPage;
