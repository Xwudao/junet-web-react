import React from 'react';
import notFound from '@/assets/illustrations/404.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
const NotFound = () => {
  console.log('NotFound render...');
  const nav = useNavigate();

  return (
    <>
      <Container maxWidth="md" sx={{ paddingTop: { xs: 10, sm: 10, md: 15 } }}>
        <Grid container p={4}>
          <Grid item xs={0} sm={6}>
            <Box>
              <img src={notFound} alt="not found this page" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign={'center'}>
              <Typography variant={`h5`}>你好像来到了一个不存在的页面</Typography>
              <Stack direction={`row`} spacing={2} marginTop={5}>
                <Button
                  size={`small`}
                  onClick={() => {
                    nav('/');
                  }}>
                  返回首页
                </Button>
                <Button
                  variant={`contained`}
                  size={`small`}
                  onClick={() => {
                    nav(-1);
                  }}>
                  <a href="#">返回上级</a>
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NotFound;
