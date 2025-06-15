import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  auth: {
    username: import.meta.env.VITE_USER_NAME!,
    password: import.meta.env.VITE_PASSWORD!,
  },
});

export default axiosInstance;