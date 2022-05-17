import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
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
    <Container maxWidth="md" sx={{ paddingTop: { xs: 10, sm: 10, md: 15 } }}>
      <Grid container className={`shadow`} p={4}>
        <Grid item xs={0} sm={6}>
          <Box>
            <img src={noAccess} alt="waiting" className={`mt-3`} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box textAlign={'center'}>
            <Typography component={`h2`} fontWeight={'bolder'} fontSize={25} mb={2}>
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
                <Typography component={`p`}>
                  <A to={`/`}>忘记密码</A>
                </Typography>
                <Typography component={`p`}>
                  <A to={`/register`}>注册</A>
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
