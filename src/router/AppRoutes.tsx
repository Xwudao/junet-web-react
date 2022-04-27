import React, { FC, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { isIndex, mappingPath, RootPath, toLine, toPath, trimPath } from '@/utils/path';
import NotFound from '@/pages/common/NotFound';
import CmpLoading from '@/components/CmpLoading';
import PageLoading from '@/components/PageLoading';

const computedPath = (loadPages: Record<string, () => Promise<{ [p: string]: any }>>) => {
  const paths = [] as RootPath[];

  for (let pathKey in loadPages) {
    let reg = new RegExp(`/pages/(.*?)Page.tsx`, 'i');
    let res = reg.exec(pathKey);
    if (res) {
      // if index-1 has not /
      let pathOne = res[1];
      if (pathOne.indexOf('/') === -1) {
        paths.push({
          name: pathOne.toLowerCase(),
          path: mappingPath(pathOne),
          Cmp: lazy(loadPages[pathKey] as any),
          children: [],
        });
      } else {
        let tmp = pathOne.split('/');
        let firstChar = tmp[0];
        let found = paths.find((item) => item.name === firstChar.toLowerCase());
        if (found) {
          found.children.push({
            name: tmp[1],
            // path=pathOne.split by /, and remove first one
            path: toLine(tmp.slice(1).join('/')),
            Cmp: lazy(loadPages[pathKey] as any),
            children: [],
          });
        }
      }
    }
  }
  console.log('paths', paths);
  return paths;
};

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
                  <item.Cmp />
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
                        <child.Cmp />
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
