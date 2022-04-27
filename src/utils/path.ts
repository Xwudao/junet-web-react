// function transform upper case to underline small case
import { routeMapping } from '@/core/config';

const toLine = (name: string) => {
  if (!name.indexOf('/')) {
    return name.toLowerCase();
  }
  let paths = name.split('/');
  let result = [] as string[];
  paths.forEach((path) => {
    result.push(camelToUnderline(path));
  });
  return result.join('/');
};
function camelToUnderline(camelStr: string) {
  return camelStr
    .replace(/[A-Z]/g, function (s) {
      return ' ' + s.toLowerCase();
    })
    .trim()
    .replaceAll(' ', '_');
}

// transform filename to path
const toPath = (name: string) => {
  // front slash
  if (name.indexOf('/front/') >= 0) {
    return getPath('front', name);
  }
  // admin slash
  if (name.indexOf('/admin/') >= 0) {
    return getPath('admin', name);
  }
  return '';
};

const getPath = (prefix: string, path: string) => {
  let reg = new RegExp(`/${prefix}([/\w]+)*/(.*?)Page.tsx`, 'i');
  let res = reg.exec(path);
  if (res) {
    let pathOne = res[1];
    let pathTwo = res[2];
    let tmp: string[] = [];

    if (pathOne) {
      tmp = pathOne.split('/').map((item) => {
        return toLine(item);
      });
    }
    tmp.push(toLine(pathTwo));
    return tmp.join('/');
  }
  return '';
};
const isIndex = (path: string) => {
  //path empty or endswith index
  return !path || path.endsWith('/index');
};

const trimPath = (path: string) => {
  //if path endswith index, trim it, return the path without index
  if (path.endsWith('index')) {
    return path.substring(0, path.length - 5);
  }
  // if path endswith slash, trim it, return the path without slash
  if (path.endsWith('/index')) {
    return path.substring(0, path.length - 6);
  }
  return path;
};

interface RootPath {
  name?: string;
  path: string; //by mapping
  Cmp: any;
  children: RootPath[];
}
// v2 get path
const mappingPath = (name: string) => {
  let path = routeMapping[name];
  if (path) return path;
  return '/' + toLine(name);
};

export { isIndex, mappingPath, trimPath, toLine, toPath };
export type { RootPath };
