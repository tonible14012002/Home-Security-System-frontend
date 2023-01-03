import axiosClient from './axiosClient';

const userApi = {
  //auth
  login: (params) => axiosClient.post('accounts/auth/token/', params),
  register: (params) => axiosClient.post('accounts/ordinary/', params),
  me: () => axiosClient.post('accounts/auth/token/detail/', {
      refresh: `${localStorage.getItem('rt-jwt')}`
  }),

  //user management
  getAllUsers: () => axiosClient.get('accounts/ordinary'),
  getUserById: (id) => axiosClient.get(`accounts/ordinary/${id}/`),
  deleteUserById: (id) => axiosClient.delete(`accounts/ordinary/${id}/`),
  updateUserById: ({ id, ...rest }) =>
    axiosClient.patch(`/accounts/ordinary/${id}/`, rest),
  
  countUser: () => axiosClient.get('accounts/ordinary-count/'),

  //admin management
  getAllAdmins: () => axiosClient.get('accounts/admin/'),
  getAllById: (id) => axiosClient.get(`accounts/admin/${id}`),

  getAllVisits: () => axiosClient.get('accounts/visit/?ordering=-time')

  //filter

  //search
};

export default userApi;
