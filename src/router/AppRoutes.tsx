import React, { FC, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { isIndex, mappingPath, RootPath, toLine, toPath, trimPath } from '@/utils/path';
import NotFound from '@/pages/common/NotFound';
import CmpLoading from '@/components/CmpLoading';
import PageLoading from '@/components/PageLoading';
import { RequireAuth } from '@/providers/AuthProvider';
import { computedPath } from '@/router/routers';

const cmps = computedPath(import.meta.glob('../pages/**/*Page.tsx'));

type IAppRoutes = {};
const AppRoutes: FC<IAppRoutes> = (props) => {
  console.log('appRoutes render...');
  return (
    <Router>
      <Routes>
        {cmps.map((item) => {
          return (
            <Route
              key={item.path}
              index={isIndex(item.path)}
              path={trimPath(item.path)}
              element={
                <Suspense fallback={<PageLoading />}>
                  <RequireAuth>
                    <item.Cmp />
                  </RequireAuth>
                </Suspense>
              }>
              {item.children?.map((child) => {
                return (
                  <Route
                    key={child.path}
                    index={isIndex(child.path)}
                    path={trimPath(child.path)}
                    element={
                      <Suspense fallback={<CmpLoading />}>
                        <RequireAuth>
                          <child.Cmp />
                        </RequireAuth>
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>
          );
        })}
        {/*<Route*/}
        {/*  path={`/`}*/}
        {/*  element={*/}
        {/*    <Suspense fallback={<PageLoading />}>*/}
        {/*      <FrontPage />*/}
        {/*    </Suspense>*/}
        {/*  }>*/}
        {/*  {frontPages.map((item, index) => (*/}
        {/*    <Route*/}
        {/*      key={index}*/}
        {/*      index={isIndex(item.path)}*/}
        {/*      path={trimPath(item.path)}*/}
        {/*      element={*/}
        {/*        <Suspense fallback={<CmpLoading />}>*/}
        {/*          <item.Cmp />*/}
        {/*        </Suspense>*/}
        {/*      }*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Route>*/}
        {/*/!*  admin*!/*/}
        {/*<Route*/}
        {/*  path={`/admin`}*/}
        {/*  element={*/}
        {/*    <Suspense fallback={<PageLoading />}>*/}
        {/*      <AdminPage />*/}
        {/*    </Suspense>*/}
        {/*  }>*/}
        {/*  {adminPages.map((item, index) => (*/}
        {/*    <Route*/}
        {/*      key={index}*/}
        {/*      index={isIndex(item.path)}*/}
        {/*      path={trimPath(item.path)}*/}
        {/*      element={*/}
        {/*        <Suspense fallback={<CmpLoading />}>*/}
        {/*          <item.Cmp />*/}
        {/*        </Suspense>*/}
        {/*      }*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Route>*/}
        {/*/!*  end admin*!/*/}

        {/*  not found*/}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
