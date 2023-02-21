import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import { Button, Divider } from '@arco-design/web-react';
import { useTheme } from '@/providers/ThemeProvider';
import { OnMdAbove, OnSmAbove, OnXs } from '@/components/responsive/Responsive';
import MediaQuery from 'react-responsive';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const { toggleTheme } = useTheme();
  return (
    <Paper className={`w-full h-full  flex items-center justify-center`}>
      <div className="card shadow-lg border-1 p-6 w-md rounded-lg">
        <div className="title font-bold text-lg">无道个人模板</div>
        <Divider />
        <Button onClick={toggleTheme}>Change Theme</Button>
        <span className={`text-primary-6`}>primary-6</span>
      </div>
    </Paper>
  );
};

export default IndexPage;
