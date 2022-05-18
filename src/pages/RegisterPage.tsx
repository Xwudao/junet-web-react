import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import wait from '@/assets/illustrations/wait.svg';
import { Link } from 'react-router-dom';

const A = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.info.main};
  text-decoration: none;
`,
);

const RegisterPage = () => {
  console.log('register2Page render...');
  return (
    <Box sx={{ height: '100%', width: '100%' }} color={'text.primary'}>
      <Paper sx={{ height: '100%' }}>
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Grid container p={4} className={`shadow`}>
            <Grid item xs={0} sm={7}>
              <Box>
                <img src={wait} alt="waiting" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box textAlign={'center'}>
                <Typography variant={`h5`} fontWeight={'bold'} mb={2}>
                  用户注册
                </Typography>
                <TextField
                  fullWidth
                  size={`small`}
                  variant="outlined"
                  label="用户名"
                  margin="normal"
                  required
                  autoFocus
                />
                <TextField
                  fullWidth
                  size={`small`}
                  variant="outlined"
                  label="密码"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  size={`small`}
                  variant="outlined"
                  label="验证码"
                  margin="normal"
                  required
                />
                <Box>
                  <Button fullWidth variant={`contained`} sx={{ marginTop: 2 }}>
                    注册
                  </Button>
                </Box>
                <Box mt={2} textAlign={'left'}>
                  <Stack spacing={2} direction={`row`} textAlign={'left'}>
                    <Typography>已有账号？</Typography>
                    <A to="/login">点击登录</A>
                    <A to="/">返回首页</A>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
