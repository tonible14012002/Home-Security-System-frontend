const userApi = {
  register: (params) => axiosClient.post('auth/register', params),
  login: (params) => axiosClient.post('auth/register', params),
};

export default userApi;
