import axios from "axios";

const API = axios.create({
  baseURL: "https://dinespot-backend-091w.onrender.com/api"
});

// Token automatically attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
