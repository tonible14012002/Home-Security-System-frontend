import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
  baseURL,
});

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;
