import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-56qq.onrender.com",
});

export default API;
