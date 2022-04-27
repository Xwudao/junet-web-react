// helper functions for authentication
import { authNum, authRouteRole, routeMapping } from '@/core/config';

// return [role, role-num]
const getAuthNumber = (path: string) => {
  let routerPath = '';
  for (let rk in routeMapping) {
    if (path.indexOf(routeMapping[rk]) > -1) {
      routerPath = routeMapping[rk];
    }
  }
  console.log('routerPath', routerPath);
  // get role by routerPath
  let role = '';
  for (let ak in authRouteRole) {
    if (ak === routerPath) {
      role = authRouteRole[ak];
    }
  }
  console.log('role', role);
  // get role number by role
  let roleNumber = 0;
  for (let ank in authNum) {
    if (ank === role) {
      roleNumber = authNum[ank];
    }
  }
  return [role, roleNumber];
};

export { getAuthNumber };
