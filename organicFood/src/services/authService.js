import api from './api';

const authService = {
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  signup: (userData) =>
    api.post('/auth/signup', userData),
  logout: () =>
    api.post('/auth/logout'),
  getCurrentUser: () =>
    api.get('/auth/me'),
};

export default authService;
