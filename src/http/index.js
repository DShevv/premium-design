import axios from "axios";

const api = axios.create({
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
  baseURL: `${process.env.API_URL}`,
});

api.interceptors.request.use((config) => {
  /*  if (config.headers.Authorization === undefined) {
    config.headers.Authorization = localStorage.getItem("token");
  } */
  return config;
});

export default api;
