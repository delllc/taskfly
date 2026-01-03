import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuthStore from '@/store/authStore';
import type { LoginRequest, RegisterRequest } from '@/types/auth.types';
import { login, logout, register } from '@/api/auth.api';

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { user, isAuthenticated, setAuth, clearAuth } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response) => {
      setAuth(response.user, response.token);
      navigate('/dashboard');
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: (response) => {
      setAuth(response.user, response.token);
      navigate('/dashboard');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
      navigate('/login');
    },
  });

  return {
    // State
    user,
    isAuthenticated,

    // Functions
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,

    // Loading
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    isLoggingOut: logoutMutation.isPending,

    // Erorrs
    loginError: loginMutation.error,
    registerError: registerMutation.error,
  };
};
