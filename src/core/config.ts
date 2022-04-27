export const routeMapping: { [key: string]: string } = {
  Front: '/',
  login: '/login',
  Admin: '/admin',
};
// guest means does not need permission
export const authRouteRole: { [path: string]: string } = {
  [routeMapping.Front]: 'guest',
  [routeMapping.login]: 'guest',
  [routeMapping.Admin]: 'admin',
};

// the bigger number can compatible with the older number
// 0 means don't need permission, 1 or above means need permission
export const authNum: { [role: string]: number } = {
  guest: 0,
  admin: 1,
};
