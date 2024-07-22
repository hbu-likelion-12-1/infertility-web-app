import axios, { AxiosResponse } from 'axios';
import { toCamel } from 'snake-camel';

export const apiClient = axios.create({
  baseURL: 'http://galaxy4276.asuscomm.com:8008/api', timeout: 5000, headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((req) => {
  const token = localStorage.getItem('access');
  if (!token) return req;
  req.headers['Authorization'] = `Bearer ${token}`;
  return req;
});

apiClient.interceptors.response.use((res) => toCamel(res.data) as AxiosResponse, (err) => {
  const statusCode = err.response.status as number;
  if (location.pathname === '/') {
    return Promise.reject({ ...err.response.data, code: statusCode });
  }
  if (statusCode === 401) {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user-store');
    location.href = '/';
  }
  return Promise.reject({ ...err.response.data, code: statusCode });
},);
