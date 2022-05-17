import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import wait from '@/assets/illustrations/wait.svg';

const A = styled('a')(
  ({ theme }) => `
  color: ${theme.palette.info.main};
  text-decoration: none;
`,
);

const RegisterPage = () => {
  console.log('register2Page render...');
  return (
    <Container maxWidth="md" sx={{ paddingTop: { xs: 10, sm: 10, md: 15 } }}>
      <Grid container className={`shadow`} p={4}>
        <Grid item xs={0} sm={6}>
          <Box>
            <img src={wait} alt="waiting" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box textAlign={'center'}>
            <Typography component={`h2`} fontWeight={'bolder'} fontSize={25} mb={2}>
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
              <Typography component={`p`}>
                已经有账号？
                <A href="/#/login">点击登录</A>
                <A href="#" className={`ml-3`}>
                  返回首页
                </A>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;
