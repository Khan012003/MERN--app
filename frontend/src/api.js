import axios from 'axios';

const api = axios.create({
  baseURL: process.env.https://mern-app-backend-yndp.onrender.com,
  withCredentials: true
});

export default api;
