import api from './axios';
import type { LoginRequest, RegisterRequest, FetchMeResponse, BackendResponse, AuthResponse } from '../types';

export const authService = {
    // register
    register: async (data: RegisterRequest) => {
        const response = await api.post<BackendResponse<null>>('/auth/register', data);
        return response.data;
    },

    // login
    login: async (data: LoginRequest) => {
        const response = await api.post<BackendResponse<AuthResponse>>('/auth/login', data);
        return response.data;
    },

    // get current user profile
    getMe: async () => {
        const response = await api.get<BackendResponse<FetchMeResponse>>('/user/me');
        return response.data;
    },

    // logout
    logout: async () => {
        const response = await api.post<BackendResponse<null>>('/auth/logout');
        return response.data;
    },
}