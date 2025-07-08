// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://filmfund-adminbackend.onrender.com/api',
});

export default API;
