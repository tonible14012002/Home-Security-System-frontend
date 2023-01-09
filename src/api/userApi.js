import axiosClient from './axiosClient';

const userApi = {
  //auth
  login: (params) => axiosClient.post('accounts/auth/token/', params),
  register: (params) => axiosClient.post('accounts/ordinary/', params),
  me: () => axiosClient.post('accounts/auth/token/detail/', {
      refresh: `${localStorage.getItem('rt-jwt')}`
  }),

  //user management
  getOrdinaryUsers: (q={}) => { 
    var params = new URLSearchParams()
    for (let key in q) {
        if (Array.isArray(q[key])){
            q[key].forEach(value => params.append(key, value))
        }
        else {
            params.append(key, q[key])
        }
    }

    return axiosClient.get('accounts/ordinary/', {params: params})
  },
  getUserById: (id) => axiosClient.get(`accounts/ordinary/${id}/`),
  deleteOrdinaryUser: (id) => axiosClient.delete(`accounts/ordinary/${id}/`),
  updateOrdinaryUser: ({ id, ...rest }) =>
    axiosClient.patch(`/accounts/ordinary/${id}/`, rest),
  
  countUser: () => axiosClient.get('accounts/ordinary-count/'),
  acceptOrdinaryUser: (id) => axiosClient.get(`accounts/ordinary/${id}/accept/`),
  

  //admin management
  getAllAdmins: () => axiosClient.get('accounts/admin/'),
  getAllById: (id) => axiosClient.get(`accounts/admin/${id}`),

  getAllVisits: () => axiosClient.get('accounts/visit/?ordering=-time')

  //filter

  //search
};

export default userApi;
