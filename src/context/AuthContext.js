import React, { createContext, useContext, useState } from 'react';
import JWTManager from '../utils/jwt';
import userApi from '../api/userApi';

export const AuthContext = createContext({
  user: {},
  setUser: () => {},
  checkAuth: () => Promise.resolve(),
  logoutClient: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const checkAuth = async () => {
    const token = JWTManager.getToken();
    if (token) {
      const res = await userApi.me();
      if (res.data) setUser(res.data);
    } else {
      const success = await JWTManager.getRefreshToken();
      if (success) {
        const res = await userApi.me();
        if (res.data) setUser(res.data);
        // else navigate('/login');
        window.location.pathname = '/login';
      } else window.location.pathname = '/login';
    }
  };

  const logoutClient = () => {
    JWTManager.deleteToken();
    JWTManager.deleteRefreshToken();
    setUser({});
  };

  const authContextData = {
    user,
    setUser,
    checkAuth,
    logoutClient,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
