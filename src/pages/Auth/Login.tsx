import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, KeyRound, Mail } from 'lucide-react';
import type { LoginRequest } from '@/types';
import { authService } from '@/services/auth.service';
import { toast } from 'react-toastify';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { LogoFixed } from '@/components/Logo/Logo';
import { useState } from 'react';
import { GoogleLoginButton } from '@/components/LoginWith/GoogleLoginButton';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const { fetchProfile, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,      // Function để register input
    handleSubmit,  // Function để handle submit
    formState: { errors }, // Object chứa errors
  } = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginRequest) => {
    setLoading(true);
    try {
      const res = await authService.login(data);
      if (!res.success) {
        toast.error(res.message || 'Login failed!');
        setLoading(false);
        return;
      }
      fetchProfile();
      setUser(res.data?.user!);
      localStorage.setItem("user", JSON.stringify(res.data?.user))
      toast.success('Login successful!');
      navigate('/');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Login failed';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

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
          <h2 className='text-3xl font-bold text-gray-900'>Welcome back</h2>
          <p className='mt-2 text-sm text-gray-600'>
            Don't have an account? <Link to={'/register'} className='text-[#4f81c7] hover:text-blue-500 font-medium underline'>Sign up</Link>
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
          <div className='relative'>
            <KeyRound className='absolute top-2 left-2 h-6 w-6' />
            <div onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-3 h-6 w-6 cursor-pointer'>
              {showPassword ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </div>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              error={errors.password?.message}
              className='px-10 h-10'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
          </div>

          <Button
            type='submit'
            loading={loading}
          >
            Login
          </Button>
        </form>
        <div className='text-[#3b82f6] mt-3 text-base hover:underline'>
          <Link to={"/forgot"}>Forgot password?</Link>
        </div>
        <div className='w-full max-w-[480px] my-3 text-[#71717A] flex items-center gap-2 justify-center'>
          <div className='grow h-[1px] bg-[#71717A]' />
          <div className='text-sm'>OR</div>
          <div className='grow h-[1px] bg-[#71717A]' />
        </div>
        <div className='w-full max-w-[500px] active:scale-95'>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default Login;