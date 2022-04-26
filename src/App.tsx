import React, { Suspense } from 'react';
import AppRoutes from '@/router/AppRoutes';
import PageLoading from '@/components/PageLoading';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<PageLoading />}>
          <AppRoutes />
        </Suspense>
      </RecoilRoot>
    </>
  );
};

export default App;
