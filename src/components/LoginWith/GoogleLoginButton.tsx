import type { ReactNode } from 'react';
import api from '../../services/axios';
import { Button } from '../Button/Button';

const handleLoginWithGoogle = async () => {
    try {
        const res = await api.get("/auth/google/url");
        const url = res.data.data.url;

        if (!url) {
            alert("Không lấy được Google URL");
            return;
        }

        // Redirect sang Google
        // window.location.href = url;

        window.location.assign(url);
    } catch (err) {
        console.error(err);
        alert("Lỗi khi login với Google");
    }
};

export const GoogleButtonLink = ({ children} : { children: ReactNode}) => {
    return (
        <button
            onClick={handleLoginWithGoogle}
        >
            {children}
        </button>
    );
}

export const GoogleLoginButton = () => {

    return (
        // <button className='px-4 py-3 text-sm w-full border flex rounded-lg items-center justify-center text-[#121214] shadow-[0px_0px_24px_-4px_rgba(0,0,0,0.06),_0px_1px_4px_0px_rgba(0,0,0,0.06)] gap-2 cursor-pointer' onClick={handleLoginWithGoogle}>
        // </button>
        <Button
            className='bg-transparent hover:bg-transparent'
            variant='outline'
            onClick={handleLoginWithGoogle}
        >
            <img src="https://cdn-static.smember.com.vn/_next/static/media/logo-google.b6f9570f.svg" alt="" />
            Login with Google
        </Button>
    )
}