import React, { FC, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageLoading from '@/components/PageLoading';
import { toPath } from '@/utils/string';
import NotFound from '@/pages/common/NotFound';

function loadingPages(loadPages: Record<string, () => Promise<{ [p: string]: any }>>) {
  const listComp: { Cmp: any; path: string }[] = [];
  for (let adminKey in loadPages) {
    let path = toPath(adminKey);
    listComp.push({ Cmp: lazy(loadPages[adminKey] as any), path });
  }
  return listComp;
}

const FrontPage = lazy(() => import('@/pages/FrontPage'));
const AdminPage = lazy(() => import('@/pages/AdminPage'));
const frontPages = loadingPages(import.meta.glob('../pages/front/**/*Page.tsx'));
const adminPages = loadingPages(import.meta.glob('../pages/admin/**/*Page.tsx'));
console.log(frontPages);

type IAppRoutes = {};
const AppRoutes: FC<IAppRoutes> = (props) => {
  console.log('appRoutes render...');
  return (
    <Router>
      <Routes>
        <Route
          path={`/`}
          element={
            <Suspense fallback={<PageLoading />}>
              <FrontPage />
            </Suspense>
          }>
          {frontPages.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <Suspense fallback={<PageLoading />}>
                  <item.Cmp />
                </Suspense>
              }
            />
          ))}
        </Route>
        {/*  admin*/}
        <Route
          path={`/admin`}
          element={
            <Suspense fallback={<PageLoading />}>
              <AdminPage />
            </Suspense>
          }>
          {adminPages.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <Suspense fallback={<PageLoading />}>
                  <item.Cmp />
                </Suspense>
              }
            />
          ))}
        </Route>
        {/*  end admin*/}

        {/*  not found*/}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
