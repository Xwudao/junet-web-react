import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@/components/Paper';
import Text from '@/components/Text';
import { Button, Divider } from '@arco-design/web-react';
import { useTheme } from '@/providers/ThemeProvider';
import { OnMdAbove, OnSmAbove, OnXs } from '@/components/responsive/Responsive';
import MediaQuery from 'react-responsive';
import Surface from '@/components/Surface';
import Icon from '@/components/Icon';
import { useAuth } from '@/providers/AuthProvider';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const { toggleTheme } = useTheme();
  const { logged, logout } = useAuth();
  return (
    <Paper className={`w-full h-full  flex items-center justify-center`}>
      <Surface className="card shadow-lg border-1 p-6 w-md rounded-lg space-y-4">
        <Text className="title font-bold text-lg">无道个人模板</Text>
        <Divider />

        <div>
          <Text>Hello, {logged ? 'You are logged' : 'Please login!'}</Text>
        </div>

        <Button onClick={toggleTheme}>Change Theme</Button>
        <div className={`space-x-2`}>
          <Button
            onClick={() => {
              nav('/search');
            }}>
            Search
          </Button>
          <Button
            onClick={() => {
              nav('/login');
            }}>
            Login
          </Button>
          <Button
            onClick={() => {
              nav('/register');
            }}>
            Register
          </Button>
          <Button
            onClick={() => {
              logout(() => {});
            }}>
            Logout
          </Button>
        </div>
        <div>
          <Icon
            icon={`i-ph-smiley`}
            colorName={`text-yellow dark:text-yellow-2`}
            className={`text-4xl`}
          />
          <Icon
            icon={`i-twemoji-smiling-cat-with-heart-eyes`}
            colorName={`text-yellow dark:text-yellow-2`}
            className={`text-4xl`}
          />
        </div>
        <div>
          <Text as={`span`} className={`text-primary-6 ml-2`}>
            primary-6
          </Text>
        </div>
      </Surface>
    </Paper>
  );
};

export default IndexPage;
