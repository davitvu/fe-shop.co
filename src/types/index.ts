// User types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl: string;
  role: 'user' | 'admin' | 'manager';
  googleId: string;
  isActive: boolean;
  isEmailVerified: boolean;
  password_changed_at: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  deletedAt: string;
  addresses: Address[];
};

export interface Address {
  id: string;
  nameReminiscent: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  address: string;
  addressType: string;
  isDefault: boolean;
  createAt: string;
  updatedAt: string;
};
export interface FetchMeResponse {
  user: User;
};

export interface BackendResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data?: T
};

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
};

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export interface InfoDataUserRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export interface AvatarRequest {

};

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export interface AuthResponse {
  user: User,
};

// API Error
export interface ResponseError {
  success: false;
  error: {
    statusCode: number;
    message: string;
  };
};

export interface HeaderType {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  anchor?: boolean;
  href?: string;
  onClick?: () => void;
  badgeCount?: boolean;
};

export interface ProductsPayload<T> {
  products: T[]
}

export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  price: string;
  stock: string;
  imageUrl: string;
  category: {
    name: string;
    slug: string;
  },
  rating: number,
  reviewCount: number,
  soldQuantity: number
}

export interface ReviewsPayload<T> {
  reviews: T[]
}

export interface ReviewCard {
  id: string,
  rating: number,
  comment: string,
  customer: {
    id: string,
    name: string,
    avatar?: string,
  },
  createdAt: string,
  verifiedPurchase: boolean
}