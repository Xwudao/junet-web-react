import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useMode } from '@/providers/ColorModeProvider';
import Icon from '@/pages/common/Icon';
import Loading from '@/pages/common/Loading';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const mode = useMode();
  return (
    <>
      <Paper elevation={1} sx={{ height: '100%', p: 1 }} square>
        <Card sx={{ p: 2 }}>
          <Typography>Button</Typography>
          <Stack direction={`row`} spacing={2}>
            <Button
              size={`small`}
              variant={`contained`}
              onClick={() => {
                mode.toggleColorMode();
              }}>
              Change Theme
            </Button>
            <Button
              size={`small`}
              variant={`contained`}
              onClick={() => {
                nav('/login');
              }}>
              To Login Page
            </Button>
            <Button
              variant={`contained`}
              onClick={() => {
                nav('/register');
              }}>
              To Register Page
            </Button>
          </Stack>
          <Typography>Icons：</Typography>
          <Stack direction={`row`} spacing={1}>
            <Icon icon={`i-eos-icons-spinner`} />
            <Icon icon={`i-icon-park-outline-loading-two`} />
            <Icon icon={`i-ic-baseline-remove-red-eye`} />
            <Icon icon={`i-eos-icons-loading`} />
          </Stack>
        </Card>
      </Paper>
    </>
  );
};

export default IndexPage;
