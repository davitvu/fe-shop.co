import Loading from "@/components/Loading/Loading";
import { useAuth } from "@/context/AuthContext";
import { lazy } from "react"
import { Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home/Home'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
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
    element: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>;
    layout?: (AnyComponent | AnyLazyComponent);
    isPrivate?: boolean;
    isGuest?: boolean;
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
        isGuest: true
    },
    {
        path: '/register',
        element: Register,
        isGuest: true
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
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log("private route", isAuthenticated);
    if (isLoading) return <Loading />
    return isAuthenticated ? children : <Navigate to={from} replace />;
}

export function GuestRoute({ children }: { children: React.ReactElement }) {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);
    
    if (isLoading) return <Loading />
    return isAuthenticated ? <Navigate to={from} replace /> : children;
}