import React, { Suspense } from 'react';
import AppRoutes from '@/router/AppRoutes';
import PageLoading from '@/components/PageLoading';

const App = () => {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <AppRoutes />
      </Suspense>
    </>
  );
};

export default App;
