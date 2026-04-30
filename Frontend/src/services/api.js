import axios from "axios";

const API = axios.create({
  baseURL: "https://dinespot-backend-bv9s.onrender.com/api"
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
