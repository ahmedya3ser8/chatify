import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://chatify-app-v1.up.railway.app/api',
  withCredentials: true
});
