import { create } from 'zustand';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { axiosInstance } from '../lib/axios';
import type { TSignupSchema } from '../pages/SignUpPage';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  profileImage?: string;
}

interface IAuthState {
  authUser: IUser | null;
  isCheckingAuth: boolean;
  isSigningUp: boolean;
  checkAuth: () => Promise<void>;
  signup: (formData: TSignupSchema) => Promise<void>;
}

export const useAuthStore = create<IAuthState>((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get<IUser>('/auth/check');
      set({ authUser: res.data })
    } catch (error) {
      console.log('Error in authCheck:', error);
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post('/auth/signup', formData);
      set({ authUser: res.data });
      toast.success('Account created successfully!');
    } catch (error) {
      console.log('error', error);
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      set({ isSigningUp: false });
    }
  }
}));
