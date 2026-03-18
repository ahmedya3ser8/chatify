import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  authUser: { name: 'Ahmed', _id: 123, age: 24 },
  isLoading: false,
  isLoggedIn: false,
  login: () => {
    console.log('login');
    set({ isLoggedIn: true })
  }
}));
