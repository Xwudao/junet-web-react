import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack } from '@mui/material';
import { useMode } from '@/providers/ColorModeProvider';

type IIndexPage = {};
const IndexPage: FC<IIndexPage> = (props) => {
  console.log('indexPage render...');
  const nav = useNavigate();
  const mode = useMode();
  return (
    <Box sx={{ height: '100%' }}>
      <Paper elevation={1} sx={{ height: '100%', p: 1 }}>
        <Stack direction={`row`} spacing={2}>
          <Button
            variant={`contained`}
            onClick={() => {
              mode.toggleColorMode();
            }}>
            Change Theme
          </Button>
          <Button
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
      </Paper>
      <Outlet />
    </Box>
  );
};

export default IndexPage;
