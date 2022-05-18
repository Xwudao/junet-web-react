import React, { FC } from 'react';
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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import noAccess from '@/assets/illustrations/no-access.svg';
import { Link } from 'react-router-dom';

const A = styled(Link)(
  ({ theme }) => `
    color: ${theme.palette.info.main};
    text-decoration: none;
  `,
);
type ILogin2Page = {};
const LoginPage: FC<ILogin2Page> = (props) => {
  console.log('login2Page render...');

  return (
    <Box sx={{ height: '100%', width: '100%' }} color={'text.primary'}>
      <Paper sx={{ height: '100%' }}>
        <Container
          maxWidth={`md`}
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Grid
            container
            sx={{ paddingTop: { xs: 10, sm: 10, md: 15 } }}
            className={`shadow`}
            p={4}>
            <Grid item xs={0} sm={6}>
              <Box>
                <img src={noAccess} alt="waiting" className={`mt-3`} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign={'center'}>
                <Typography variant={`h5`} mb={2}>
                  登录系统
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
                <Box>
                  <Button fullWidth variant={`contained`} sx={{ marginTop: 2 }}>
                    登录
                  </Button>
                </Box>
                <Box mt={2} textAlign={'left'}>
                  <Stack direction={`row`} spacing={2}>
                    <A to={`/`}>忘记密码</A>
                    <A to={`/register`}>注册</A>
                    <A to={`/`}>返回首页</A>
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

export default LoginPage;
