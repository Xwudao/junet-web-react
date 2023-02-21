import AppRoutes from '@/router/AppRoutes';
import React from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
          {/*<Suspense fallback={<PageLoading />}>*/}
          {/*  <AppRoutes />*/}
          {/*</Suspense>*/}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
