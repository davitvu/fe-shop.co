import { authService } from "@/services/auth.service";
import type { User } from "@/types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthContextType {
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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            const res = await authService.getMe();
            setUser(res.data);
        } catch (error) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        setUser(null);
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