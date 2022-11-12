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
        const res = await fetch('http://localhost:3001/api/auth/refresh', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('rt-jwt')}`,
          },
        }).then((res) => res.json());

        if (res) {
          setToken(res.access_token);
          setRefreshToken(res.refresh_token);
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
