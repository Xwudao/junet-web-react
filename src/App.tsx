import React from 'react';
import { RecoilRoot } from 'recoil';
// import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import AppRoutesConfig from '@/router/AppRoutesConfig';
import { HashRouter as Router } from 'react-router-dom';
import ColorModeProvider from '@/providers/ColorModeProvider';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          {/*<ThemeProvider theme={theme}>*/}
          <ColorModeProvider>
            <Router>
              <AppRoutesConfig />
            </Router>
          </ColorModeProvider>
          {/*<Suspense fallback={<PageLoading />}>*/}
          {/*  <AppRoutes />*/}
          {/*</Suspense>*/}
          {/*</ThemeProvider>*/}
        </AuthProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
