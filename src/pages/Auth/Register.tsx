import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, KeyRound, User, Phone, EyeOff, Eye } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import type { RegisterRequest } from '@/types';
import { authService } from '@/services/auth.service';
import { toast } from 'react-toastify';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { LogoFixed } from '@/components/Logo/Logo';
import { useState } from 'react';

const Register = () => {
  const { setIsLoading, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
  });

  const onSubmit = async (data: RegisterRequest) => {
    setIsLoading(true);
    try {
      const res = await authService.register(data);
      if (!res.success) {
        toast.error(res.message || 'Login failed!');
        setIsLoading(false);
        return;
      }
      toast.success('Registration successful! Please login.');

      navigate('/login');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Registration failed';
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center py-12 px-7">
      {/* Lavender Blush Flow Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(315deg, #E1BEE7 0%, #F3E5F5 20%, #FCE4EC 40%, #FFF0F5 60%, #F8BBD9 80%, #E1BEE7 100%)`,
        }}
      />

      <div className='relative w-full z-10 flex flex-col items-center'>
        <LogoFixed />
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>Create your account</h2>
          <p className='mt-2 text-sm text-gray-600'>
            Already have an account? <Link to={'/login'} className='text-[#4f81c7] hover:text-blue-500 font-medium underline'>Sign in</Link>
          </p>
        </div>
        <form className="mt-8 space-y-6 w-full max-w-[500px]" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-6 lg:flex-row lg:gap-2'>
            <div className='relative grow-1'>
              <User className='absolute top-2 left-2 h-6 w-6' />
              <Input
                type='text'
                placeholder="John"
                error={errors.firstName?.message}
                className='pl-10 h-10'
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters',
                  },
                })}
              />
            </div>
            <div className='relative grow-1'>
              <User className='absolute top-2 left-2 h-6 w-6' />
              <Input
                type='text'
                placeholder="Doe"
                error={errors.lastName?.message}
                className='pl-10 h-10'
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                })}
              />
            </div>
          </div>
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
          <div className='relative'>
            <Phone className='absolute top-2 left-2 h-6 w-6' />
            <Input
              type='tel'
              placeholder="0123456789"
              error={errors.phone?.message}
              className='pl-10 h-10'
              {...register('phone', {
                required: "Phone is require",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
            />
          </div>

          <Button
            type='submit'
            loading={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;