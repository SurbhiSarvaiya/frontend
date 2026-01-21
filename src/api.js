import axios from "axios";

export const API = axios.create({
  baseURL: "https://backend-56qq.onrender.com",
});

// 🔐 Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
