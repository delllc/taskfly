import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '@/types/auth.types';
import { api } from './axios';

export const login = async ({
  email,
  password,
}: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post('/auth/signin', { email, password });
  localStorage.setItem('access_token', response.data.access_token);

  return response.data;
};

export const register = async ({
  email,
  password,
  username,
}: RegisterRequest): Promise<AuthResponse> => {
  const response = await api.post('/api/auth/signup', {
    email,
    password,
    username,
  });
  localStorage.setItem('access_token', response.data.access_token);

  return response.data;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem('access_token');
};
