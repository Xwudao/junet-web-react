import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import { Button } from '@arco-design/web-react';
import { useTheme } from '@/providers/ThemeProvider';
import { OnMdAbove, OnSmAbove, OnXs } from '@/components/responsive/Responsive';
import MediaQuery from 'react-responsive';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const { toggleTheme } = useTheme();
  return (
    <Paper className={`w-full h-full p-3`}>
      <Text as={`span`} className={`block text-lg mb-2`}>
        Change Theme
      </Text>
      <Button type={`primary`} onClick={toggleTheme}>
        change theme
      </Button>
      <OnMdAbove>
        <Text as={`span`} className={`block text-lg mb-2`}>
          Only show On SM
        </Text>
      </OnMdAbove>
    </Paper>
  );
};

export default IndexPage;
