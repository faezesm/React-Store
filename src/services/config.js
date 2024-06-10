import axios from "axios";

const api = axios.create({ baseURL: "https://api.escuelajs.co/api/v1" });

api.interceptors.response.use((response) => {
  return response.data
}, error => Promise.reject(error))

export default api;
