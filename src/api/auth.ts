import axios from 'axios';
import { API_URL } from '../config';

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const register = async (userData: any) => {
  try {
    // Format skills as array if provided as string
    if (userData.role === 'annotator' && typeof userData.skills === 'string') {
      userData.skills = userData.skills.split(',').map((skill: string) => skill.trim());
    }

    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const verifyToken = async (token: string) => {
  try {
    const response = await api.get('/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Invalid token');
  }
};