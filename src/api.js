import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-56qq.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

// 🔐 Automatically attach JWT
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
