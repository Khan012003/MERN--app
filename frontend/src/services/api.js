import axios from 'axios';

const api = axios.create({
    baseURL: process.env.https://mern-app-backend-yndp.onrender.com, // Should be http://localhost:5001/api
    headers: {
      'Content-Type': 'application/json',
    }
  });

export default api;
