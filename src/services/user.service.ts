import type { BackendResponse, FetchMeResponse, InfoDataUserRequest } from "@/types";
import api from "./axios";

export const userService = {
    // get current user profile
    getMe: async () => {
        const response = await api.get<BackendResponse<FetchMeResponse>>('/users/me');
        return response.data;
    },

    // update profile
    updateUser: async (data: InfoDataUserRequest) => {
        const res = await api.put<BackendResponse<null>>('/users/me', data);
        return res.data;
    },

    // upload avatar
    uploadAvatar: async (fd: FormData) => {
        const res = await api.post<BackendResponse<null>>('/users/avatar', fd);
        return res.data;
    }
}
