import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080/api';

export const login = (username, password) =>
  axios.post(`${API_BASE}/auth/login`, { username, password });

export const fetchFarms = (token) =>
  axios.get(`${API_BASE}/farms`, { headers: { Authorization: `Bearer ${token}` } });

export const createFarm = (token, farm) =>
  axios.post(`${API_BASE}/farms`, farm, { headers: { Authorization: `Bearer ${token}` } });
