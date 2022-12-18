import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const LOGOUT_EVENT = 'jwt-logout';

const JWTManager = () => {
  let inMemoryToken = null;
  let refreshTokenTimeoutId = null;
  let userId = null;

  const getUserId = () => userId;

  const getToken = () => inMemoryToken;

  const setToken = (accessToken) => {
    inMemoryToken = accessToken;

    const decoded = jwtDecode(accessToken);
    userId = decoded.sub;
    setRefreshTokenTimeout(Number(decoded.exp) - Number(decoded.iat));

    return true;
  };

  const abortRefreshToken = () => {
    if (refreshTokenTimeoutId) window.clearTimeout(refreshTokenTimeoutId);
  };

  const deleteToken = () => {
    inMemoryToken = null;
    abortRefreshToken();
    window.localStorage.setItem(LOGOUT_EVENT, Date.now().toString());
    return true;
  };

  //Logout all tabs

  const setTokenToNull = () => (inMemoryToken = null);

  const setRefreshToken = (token) => localStorage.setItem('rt-jwt', token);

  const getRefreshToken = async () => {
    if (localStorage.getItem('rt-jwt')) {
      try {
        let formData = new FormData();
        formData.append('refresh', localStorage.getItem('rt-jwt'));
        const res = await axios.post("http://127.0.0.1:8000/accounts/auth/token/refresh/", formData) 

        if (res && res.data) {
          setToken(res.data.access);
          return true;
        } else return false;
      } catch (error) {
        console.log('Unauthenticated, ', error);
        deleteToken();
        return false;
      }
    }
    return false;
  };

  const deleteRefreshToken = () => {
    window.localStorage.removeItem('rt-jwt');
    return true;
  };

  const setRefreshTokenTimeout = (delay) => {
    refreshTokenTimeoutId = window.setTimeout(
      getRefreshToken,
      delay * 1000 - 5000
    );
  };

  return {
    getToken,
    setToken,
    setRefreshToken,
    getRefreshToken,
    deleteRefreshToken,
    deleteToken,
    getUserId,
    setTokenToNull,
  };
};

export default JWTManager();
