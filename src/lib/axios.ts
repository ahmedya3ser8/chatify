import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://chatify-v1.vercel.app/api',
  withCredentials: true
});
