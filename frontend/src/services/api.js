import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

api.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  localStorage.clear()
  window.location.reload()
 }
 return error;
});

export default api;