import axios, { type AxiosInstance } from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default api