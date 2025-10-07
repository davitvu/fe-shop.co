import Loading from "@/components/Loading/Loading";
import { useAuth } from "@/context/Auth.context";
import { lazy } from "react"
import { Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import('@/pages/Home/Home'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const DefaultLayout = lazy(() => import("@/components/Layouts/DefaultLayout/DefaultLayout.tsx"));
const HeaderOnly = lazy(() => import("@/components/Layouts/HeaderOnly/HeaderOnly.tsx"));

export type AnyComponent = React.ComponentType<any>;
export type AnyLazyComponent = React.LazyExoticComponent<AnyComponent>;

export interface RouteConfig {
    path: string;
    element: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>;
    layout?: (AnyComponent | AnyLazyComponent);
    isPrivate?: boolean;
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
    },
    {
        path: '/register',
        element: Register,
    },
    {
        path: '/profile',
        element: Profile,
        layout: HeaderOnly,
        isPrivate: true
    },
]

export default function PrivateRoute({ children }: { children: React.ReactElement }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <Loading />

    const location = useLocation();
    return isAuthenticated ? children : <Navigate to="/login" replace state={{ from: location }} />;
}