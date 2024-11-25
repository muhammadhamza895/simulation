import axios from 'axios';

export const baseUrl = 'http://localhost:8080';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});


