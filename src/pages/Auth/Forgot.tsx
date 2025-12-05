import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { LogoFixed } from "@/components/Logo/Logo";
import { authService } from "@/services/auth.service";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forgot = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,      // Function để register input
        handleSubmit,  // Function để handle submit
        formState: { errors }, // Object chứa errors
    } = useForm<{ email: string }>({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: { email: string }) => {
        setLoading(true);
        try {
            const res = await authService.forgot(data);
            console.log(res);
            
            navigate("/otp");
        } catch (error: any) {
            const message = error.response?.data?.error?.message || 'Forgot password failed';
            toast.error(message);
            navigate('/forgot');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-full relative flex items-center py-12 px-7">
            {/* Lavender Blush Flow Gradient (Top Left to Bottom Right) */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `linear-gradient(135deg, #E1BEE7 0%, #F3E5F5 20%, #FCE4EC 40%, #FFF0F5 60%, #F8BBD9 80%, #E1BEE7 100%)`,
                }}
            />

            <div className='relative w-full z-10 flex flex-col items-center'>
                <LogoFixed />
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-900'>Reset your password</h2>
                    <p className='mt-2 text-sm text-gray-600 max-w-[380px]'>
                        Enter your user account's verified email address and we will send you a password reset link.
                    </p>
                </div>
                <form className="mt-8 space-y-6 w-full max-w-[500px]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative'>
                        <Mail className='absolute top-2 left-2 h-6 w-6' />
                        <Input
                            type='email'
                            placeholder="john@example.com"
                            error={errors.email?.message}
                            className='pl-10 h-10'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                    </div>

                    <Button
                        type='submit'
                        loading={loading}
                    >
                        Send OTP
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Forgot