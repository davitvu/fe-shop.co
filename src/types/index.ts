// User types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  role: 'user' | 'admin' | 'manager';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface FetchMeResponse {
  user: User;
}

export interface BackendResponse<T> {
  success: boolean;
  message: string;
  data?: T
  error?: ApiError
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface InfoUserRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface AvatarRequest {

}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface AuthResponse {
  user: User,
}

// API Error
export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    statusCode: number;
  };
}

export interface HeaderType {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  badgeCount?: boolean;
}