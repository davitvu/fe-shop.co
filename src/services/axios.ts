import type { BackendResponse } from "@/types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4953/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

const refreshAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export const apiProduct = axios.create({
  baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(
  (config) => {
    // không cần làm gì vì cookies tự set bên backend rồi 

    return config;
  },
  (error) => Promise.reject(error)
)

// ========== REFRESH TOKEN LOGIC ==========
let isRefreshing = false;
let failedQueue: Array<{
  resolve: () => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (error: any = null) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => {
    return response;
  }, async (error) => {
    const originalRequest = error.config;
    
    if (!error.response) return Promise.reject(error);
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("123")
      // Nếu đang refresh thì thêm mấy thằng chó đến sau chỉ cần vào hàng đợi ké token
      if (isRefreshing) {
        return new Promise<void>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() =>{ 
            api(originalRequest)
            console.log("12313")
          })
          .catch(err => {
            Promise.reject(err)
            console.log("12313")
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // dùng 1 đầu config API khác
        await refreshAPI.post<BackendResponse<null>>('/auth/refresh-token');

        processQueue();
        isRefreshing = false;
        return api(originalRequest);
      } catch (error) {
        isRefreshing = false;
        console.log("123")
        processQueue(error);
        localStorage.removeItem('user');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;