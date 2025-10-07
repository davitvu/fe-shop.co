import api from './axios';
import type { LoginRequest, RegisterRequest, AuthResponse, User } from '../types';

export const authService = {
    // register
    register: async (data: RegisterRequest) => {
        const response = await api.post<AuthResponse>('/auth/register', data);
        return response.data;
    },

    // login
    login: async (data: LoginRequest) => {
        const response = await api.post<AuthResponse>('/auth/login', data);
        return response.data;
    },

    // get current user profile
    getMe: async () => {
        const response = await api.get<{ success: boolean; data: User }>('/auth/me');
        return response.data;
    },

    // logout
    logout: async () => {
        const response = await api.post('/auth/logout');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return response.data;
    },
}