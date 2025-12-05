import api from './axios';
import type { LoginRequest, RegisterRequest, BackendResponse, AuthResponse, ChangePasswordRequest } from '../types';

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

    // logout
    logout: async () => {
        const response = await api.post<BackendResponse<null>>('/auth/logout');
        return response.data;
    },

    // change-password
    changePassword: async (data: ChangePasswordRequest) => {
        const res = await api.put<BackendResponse<null>>('/auth/change-password', data);
        return res.data;
    },

    // forgot password
    forgot: async (data: { email: string }) => {
        const res = await api.post<BackendResponse<null>>('/auth/forgot-password', data);
        return res.data;
    },

    // verify otp and token
    verifyOtp: async (otp: string) => {
        const res = await api.post<BackendResponse<null>>('/auth/verify-otp/token', { otp });
        return res.data;
    },

    // check user exists before reset password
    checkUserResettingPassword: async () => {
        const res = await api.get<BackendResponse<null>>('/auth/reset/check');
        return res.data;
    },

    // reset password
    resetPassword: async (data: { password: string }) => {
        const res = await api.post<BackendResponse<null>>('/auth/reset', data);
        return res.data;
    },

    // send verification email
    sendVerificationEmail: async (data: { email: string }) => {
        const res = await api.post<BackendResponse<null>>('/auth/send-verification-email', data);
        return res.data;
    },

    // verify email
    verifyEmail: async () => {
        const res = await api.get<BackendResponse<null>>('/auth/verify-email');
        return res.data;
    }
}