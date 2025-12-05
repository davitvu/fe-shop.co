import Loading from "@/components/Loading/Loading";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const AuthCallback = () => {
    const navigate = useNavigate();
    const { fetchProfile } = useAuth();

    useEffect(() => {
        const handleLogin = () => {
            try {
                fetchProfile();    
                navigate("/");        
            } catch (err) {
                console.error("Lỗi khi fetchProfile sau Google login:", err);
                navigate("/login");
            }
        };

        handleLogin();
    }, [fetchProfile, navigate]);

    return (
        <Loading />
    )
}

export default AuthCallback