import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useAuth } from '@/context/Auth.context';
import { Input } from '@/components/Input/Input';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <ShoppingBag className="w-20 h-20 text-blue-600 mx-auto mb-8" />

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Shop.co
          </h1>
          <Input 
            placeholder='email'
          />
          <p className="text-xl text-gray-600 mb-8">
            Your one-stop e-commerce platform for all your shopping needs
          </p>

          <div className="flex gap-4 justify-center">
            {isAuthenticated ? (
              <>
                <button onClick={() => navigate('/products')}>
                  Browse Products
                </button>
                <button onClick={() => navigate('/profile')}>
                  My Profile
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')}>
                  Sign in
                </button>
                <button onClick={() => navigate('/register')}>
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;