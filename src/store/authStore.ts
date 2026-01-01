import type { User } from '@/types/auth.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const AuthStore = create<{
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
  checkAuth: () => void;
}>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      setUser: (user: User) => set({ user, isAuthenticated: true }),
      setToken: (token: string) => set({ token }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      checkAuth: () => {
        const { token } = get();
        if (token) {
          set({ isAuthenticated: true });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
    },
  ),
);

export default AuthStore;
