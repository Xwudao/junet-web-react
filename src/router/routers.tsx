import React, { lazy, Suspense } from 'react';
import { isIndex, mappingPath, RootPath, toLine, trimPath } from '@/utils/path';
import { RouteObject } from 'react-router-dom';
import { RequireAuth } from '@/providers/AuthProvider';
import PageLoading from '@/components/PageLoading';
import CmpLoading from '@/components/CmpLoading';
import NotFound from '@/pages/common/NotFound';

export const computedPath = (
  loadPages: Record<string, () => Promise<{ [p: string]: any }>>,
) => {
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
let routes = [] as RouteObject[];
cmps.forEach((item) => {
  let route: RouteObject = {
    path: trimPath(item.path),
    index: isIndex(item.path),
    element: (
      <Suspense fallback={<PageLoading />}>
        <RequireAuth>
          <item.Cmp />
        </RequireAuth>
      </Suspense>
    ),
  };

  if (item.children.length > 0) {
    route.children = item.children.map((child) => {
      return {
        path: trimPath(child.path),
        index: isIndex(child.path),
        element: (
          <Suspense fallback={<CmpLoading />}>
            <RequireAuth>
              <child.Cmp />
            </RequireAuth>
          </Suspense>
        ),
      };
    });
  }
  routes.push(route);
});

//=====other routes
routes.push({
  index: false,
  path: '*',
  element: <NotFound />,
});

export default routes;
