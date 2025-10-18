import { authService } from "@/services/auth.service";
import type { User } from "@/types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type AuthContextType = {
    user: User | null;
    setUser: (v: User) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    isAuthenticated: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isLogged = localStorage.getItem('user');
        if (isLogged) {
            fetchMe();
        }
    }, [])

    const fetchMe = async () => {
        setIsLoading(true);
        try {
            const res = await authService.getMe();
            localStorage.setItem('user', JSON.stringify(res.data?.user))
            if (!res.success) {
                setIsLoading(false);
                return;
            }
            setUser(res.data?.user!);
        } catch (error) {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            const res = await authService.logout();
            localStorage.removeItem('user');
        } catch (error: any) {
            toast(error)
        } finally {
            setUser(null);
        }
        toast('Logged out successfully');
        navigate('/');
    }

    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated: !!user,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');

    return context;
}