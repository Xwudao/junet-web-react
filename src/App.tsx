import React, { Suspense, useEffect } from 'react';
import AppRoutes from '@/router/AppRoutes';
import PageLoading from '@/components/PageLoading';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@/providers/ThemeProvider';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Suspense fallback={<PageLoading />}>
            <AppRoutes />
          </Suspense>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
