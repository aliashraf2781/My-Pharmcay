import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://immortal-credible-ibex.ngrok-free.app/api/v1/",
  timeout: 10000, // 10 seconds timeout
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    "ngrok-skip-browser-warning": "true"
    
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
