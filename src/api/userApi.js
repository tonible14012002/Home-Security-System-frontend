import axiosClient from './axiosClient';
const userApi = {
  //auth
  login: (params) => axiosClient.post('accounts/auth/token', params),
  register: (params) => axiosClient.post('accounts/ordinary', params),
  me: () => axiosClient.post('auth/me'),

  //user management
  getAllUsers: () => axiosClient.get('accounts/ordinary'),
  getUserById: (id) => axiosClient.get(`accounts/ordinary/${id}`),
  deleteUserById: (id) => axiosClient.delete(`accounts/ordinary/${id}`),
  updateUserById: ({ id, ...rest }) =>
    axiosClient.patch(`http://127.0.0.1:8000/accounts/ordinary/${id}`, rest),

  //admin management
  getAllAdmins: () => axiosClient.get('accounts/admin'),
  getAllById: (id) => axiosClient.get(`accounts/admin/${id}`),

  //filter

  //search
};

export default userApi;
