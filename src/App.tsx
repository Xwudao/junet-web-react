import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import AppRoutesConfig from '@/router/AppRoutesConfig';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <ThemeProvider>
            <Router>
              <AppRoutesConfig />
            </Router>
            {/*<Suspense fallback={<PageLoading />}>*/}
            {/*  <AppRoutes />*/}
            {/*</Suspense>*/}
          </ThemeProvider>
        </AuthProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
