import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, Phone, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/Auth.context';
import type { RegisterRequest } from '@/types';
import { authService } from '@/services/auth.service';
import { toast } from 'react-toastify';
import Input from '@/components/Input/Input';

const Register = () => {
  const { setIsLoading, isLoading } = useAuth();
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Input
                label="Email address"
                type="email"
                placeholder="john@example.com"
                className="pl-10"
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Password must not exceed 50 characters',
                  },
                })}
              />
            </div>

            <div className="relative">
              <User className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Input
                label="First name"
                type="text"
                placeholder="John"
                className="pl-10"
                error={errors.firstName?.message}
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'First name must not exceed 50 characters',
                  },
                })}
              />
            </div>

            <div className="relative">
              <User className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Input
                label="Last name"
                type="text"
                placeholder="Doe"
                className="pl-10"
                error={errors.lastName?.message}
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Last name must not exceed 50 characters',
                  },
                })}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              <Input
                label="Phone number (optional)"
                type="tel"
                placeholder="0123456789"
                className="pl-10"
                error={errors.phone?.message}
                {...register('phone', {
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits',
                  },
                })}
              />
            </div>
          </div>

          <button type="submit" className="w-full">
            <UserPlus className="w-5 h-5 mr-2" />
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;