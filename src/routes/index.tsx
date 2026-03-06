import Loading from "@/components/Loading/Loading";
import { useAuth } from "@/context/AuthContext";
import { lazy, type ReactElement } from "react"
import { Navigate } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home/Home'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const Forgot = lazy(() => import('@/pages/Auth/Forgot'));
const VerifyOtp = lazy(() => import('@/pages/Auth/VerifyOtp'));
const AuthCallback = lazy(() => import('@/pages/Auth/AuthCallback'));
const ResetPassword = lazy(() => import('@/pages/Auth/ResetPassword'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const Shop = lazy(() => import('@/pages/Shop/Shop'))
const Cart = lazy(() => import('@/pages/Cart/Cart'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail/ProductDetail'))
const DefaultLayout = lazy(() => import("@/components/Layouts/DefaultLayout/DefaultLayout"));
const HeaderOnly = lazy(() => import("@/components/Layouts/HeaderOnly/HeaderOnly"));

export type AnyComponent = React.ComponentType<any>;
export type AnyLazyComponent = React.LazyExoticComponent<AnyComponent>;

export interface RouteConfig {
    path: string;
    element: React.ComponentType<ReactElement> | React.LazyExoticComponent<React.ComponentType<any>>;
    layout?: (AnyComponent | AnyLazyComponent);
    isPrivate?: boolean; // những route cần phải đăng nhập thì mới truy cập được
    isGuest?: boolean; // những route đã đăng nhập rồi thì không vào được
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        element: Home,
        layout: DefaultLayout
    },
    {
        path: '/login',
        element: Login,
        isGuest: true,
    },
    {
        path: '/register',
        element: Register,
        isGuest: true,
    },
    {
        path: '/forgot',
        element: Forgot,
        isGuest: true,
    },
    {
        path: '/otp',
        element: VerifyOtp,
        isGuest: true,
    },
    {
        path: '/reset',
        element: ResetPassword,
        isGuest: true,
    },
    {
        path: '/auth/callback',
        element: AuthCallback,
        isGuest: true,
    },
    {
        path: '/shop',
        element: Shop,
        layout: DefaultLayout
    },
    {
        path: '/cart',
        element: Cart,
        layout: DefaultLayout
    },
    {
        path: '/product:slug',
        element: ProductDetail,
        layout: DefaultLayout
    },
    {
        path: '/profile',
        element: Profile,
        layout: HeaderOnly,
        isPrivate: true
    },
]

export function PrivateRoute({ children }: { children: React.ReactElement }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <Loading />
    return isAuthenticated ? children : <Navigate to={'/login'} replace />;
}

export function GuestRoute({ children }: { children: React.ReactElement }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <Loading />
    return isAuthenticated ? <Navigate to={'/'} replace /> : children;
}