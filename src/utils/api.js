// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://681de6a7c1c291fa66322005.mockapi.io/api', // replace with your backend URL
});

// Optional: add interceptors, headers, auth, etc.

export default api;