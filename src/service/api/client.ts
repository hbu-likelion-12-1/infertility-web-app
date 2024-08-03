import axios, { AxiosResponse } from 'axios';
import { toCamel, toSnake } from 'snake-camel';

const baseURL: string = process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string;
export const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((req) => {
  const token = localStorage.getItem('access');
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }
  if (req.data) {
    req.data = toSnake(req.data);
  }
  return req;
});

apiClient.interceptors.response.use((res) => toCamel(res.data) as AxiosResponse, (err) => {
  const statusCode = err.response.status as number;
  // if (location.pathname === '/') {
  //   return Promise.reject({ ...err.response.data, code: statusCode });
  // }
  if (statusCode === 401) {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user-store');
    location.href = '/login';
  }
  return Promise.reject({ ...err.response.data, code: statusCode });
},);
