import axios from 'axios';

const baseSocketURL = "ws://192.168.204.1:8000/";
const baseURL = "http://192.168.204.1:8000";
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
