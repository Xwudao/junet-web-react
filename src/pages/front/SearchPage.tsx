import React, { FC } from 'react';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import { Button } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';

type ISearchPage = {};
const SearchPage: FC<ISearchPage> = (props) => {
  console.log('searchPage render...');
  const nav = useNavigate();
  return (
    <Paper className={`w-full h-full`}>
      <Button
        onClick={() => {
          nav(-1);
        }}>
        Back to
      </Button>
    </Paper>
  );
};

export default SearchPage;
