import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { LogoFixed } from "@/components/Logo/Logo"
import { authService } from "@/services/auth.service";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,      // Function để register input
    handleSubmit,  // Function để handle submit
    formState: { errors }, // Object chứa errors
  } = useForm<{ password: string }>({
    defaultValues: {
      password: '',
    },
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        await authService.checkUserResettingPassword();
      } catch (error: any) {
        navigate('/login');
      }
    };

    checkUser();
  }, []);

  const onSubmit = async (data: { password: string }) => {
    setLoading(true);
    try {
      const res = await authService.resetPassword(data);
      console.log(res);
      if (!res.success) {
        toast.error(res.message || 'Reset password failed!');
        setLoading(false);
        return;
      }

      toast.success('Login successful!');
      navigate('/');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Reset password failed';
      toast.error(message);
      navigate('/login');
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
          <h2 className='text-3xl font-bold text-gray-900'>Set a new password</h2>
          <p className='mt-2 text-sm text-gray-600 max-w-[380px]'>
            Enter your new password below to complete the reset process.
          </p>
        </div>
        <form className="mt-8 space-y-6 w-full max-w-[500px]" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="New password"
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
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword