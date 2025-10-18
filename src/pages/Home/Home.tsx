import HeroSection from '@/components/HeroSection/HeroSection';
import BrandLogosSection from '@/components/BrandLogosSection/BrandLogosSection';
import NewArrivalsSection from '@/components/NewArrivalsSection/NewArrivalsSection';
import TopSellingSection from '@/components/TopSellingSection/TopSellingSection';
import BrowseByStyleSection from '@/components/BrowseByStyleSection/BrowseByStyleSection';
import CustomerReviews from '@/components/CustomerReviews/CustomerReviews';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { apiProduct } from '@/services/axios';

const Home = () => {
  const [listProducts, setListProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await apiProduct.get(`/product?sortType=${0}&page=${1}&${10}`)
      setListProduct(res.data.contents);
      setProductLoading(false);
    } catch (error) {
      toast.error("get product error")
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <HeroSection />
      <BrandLogosSection />
      <NewArrivalsSection data={listProducts.slice(0, 7)} productLoading={productLoading}/>
      <TopSellingSection data={listProducts.slice(7, 14)} productLoading={productLoading} />
      <BrowseByStyleSection />
      <CustomerReviews />
    </>
  );
};

export default Home;