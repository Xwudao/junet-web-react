import React, { Suspense, useEffect } from 'react';
import AppRoutes from '@/router/AppRoutes';
import PageLoading from '@/components/PageLoading';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <ThemeProvider>
            <Suspense fallback={<PageLoading />}>
              <AppRoutes />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
