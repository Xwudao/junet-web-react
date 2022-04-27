import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthNumber } from '@/utils/auth';

interface AuthContextType {
  user: any;
  login: (user: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}
let AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState('');
  let login = (user: string, callback: VoidFunction) => {
    setUser(user);
    callback();
  };
  let logout = (callback: VoidFunction) => {
    setUser('');
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();
  const [_, num] = getAuthNumber(location.pathname);
  if (num === 0 || auth.user) {
    return children;
  }
  return <Navigate to={`/login`} state={{ from: location }} replace />;
};
export { AuthProvider, useAuth, RequireAuth };
export type { AuthContextType };
