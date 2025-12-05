import { Button } from "@/components/Button/Button";
import { LogoFixed } from "@/components/Logo/Logo";
import OtpInput from "@/components/OtpInput/OtpInput";
import { authService } from "@/services/auth.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await authService.verifyOtp(otp);
      console.log(res);
      
      navigate('/reset');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Verify otp failed';
      toast.error(message);
      navigate('/login');
    } finally {
      setLoading(false);
    }
    console.log(otp)
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
          <h2 className='text-3xl font-bold text-gray-900'>Verify your OTP</h2>
          <p className='mt-2 text-sm text-gray-600 max-w-[400px]'>
            We’ve sent a 6-digit verification code to your email. Please enter it below to continue.
          </p>
        </div>
        <div className="mt-7">
          <OtpInput
            maxLength={6}
            value={otp}
            onChange={setOtp}
            onlyNumber={true}
          />
        </div>
        <div className="mt-8 w-full max-w-[300px]">
          <Button
            loading={loading}
            disabled={otp.length < 6}
            onClick={handleSubmit}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}


export default VerifyOtp