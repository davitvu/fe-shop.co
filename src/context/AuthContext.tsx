import { authService } from "@/services/auth.service";
import { userService } from "@/services/user.service";
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
    fetchProfile: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            fetchProfile();
        } else {
            localStorage.removeItem('user');
            setIsLoading(false);
        }

    }, []);

    const fetchProfile = async () => {
        console.log("zozozo")
        try {
            const res = await userService.getMe();
            if (res.data?.user) {
                const { email, firstName, lastName } = res.data?.user;
                localStorage.setItem('user', JSON.stringify({ email, firstName, lastName }))
                setUser(res.data?.user!);
            } else {
                localStorage.removeItem('user');
                setUser(null);
            }
        } catch (error) {
            localStorage.removeItem('user');
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            localStorage.removeItem('user');
            setUser(null);
            toast.success('Logged out successfully');
            navigate('/');
        } catch (error: any) {
            localStorage.removeItem('user');
            console.log("loi luc login", error);
            setUser(null);
            toast.error(error?.response?.data?.message || 'Logout failed');
            navigate('/');
        }
    }

    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated: !!user,
        logout,
        fetchProfile
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