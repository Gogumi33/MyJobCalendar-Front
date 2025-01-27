import axios from 'axios';

// const API_URL = 'http://localhost:8080/';

// const API_URL = 'https://mjcback.duckdns.org/';
const API_URL = 'https://myjobcal.duckdns.org'; // 뒤에 /는 제외시키는게 좋음.

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;