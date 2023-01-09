import axios from 'axios';

const baseSocketURL = "ws://10.130.108.210:8000/";
const baseURL = "http://10.130.108.210:8000";
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
export { baseURL, baseSocketURL }
