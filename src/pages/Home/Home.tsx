import HeroSection from '@/components/HeroSection/HeroSection';
import BrandLogosSection from '@/components/BrandLogosSection/BrandLogosSection';
import NewArrivalsSection from '@/components/NewArrivalsSection/NewArrivalsSection';
import TopSellingSection from '@/components/TopSellingSection/TopSellingSection';
import BrowseByStyleSection from '@/components/BrowseByStyleSection/BrowseByStyleSection';
import CustomerReviews from '@/components/CustomerReviews/CustomerReviews';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { productService } from '@/services/product.service';
import type { ProductCard, ReviewCard } from '@/types';
import { reviewService } from '@/services/review.service';

const Home = () => {
  const [newArrivals, setNewArrivals] = useState<ProductCard[]>([]);
  const [topSelling, setTopSelling] = useState<ProductCard[]>([]);
  const [featuredReviews, setFeaturedReviews] = useState<ReviewCard[]>([]);
  const [getProductLoading, setProductLoading] = useState(true);

  const getProducts = async () => {
    try {
      const newArrivalsRes = await productService.getNewArrivals(10);
      const topSellingRes = await productService.getTopSelling(10);
      const featuredReviewsRes = await reviewService.getFeaturedReviews();

      setNewArrivals(newArrivalsRes.data?.products || []);
      setTopSelling(topSellingRes.data?.products || []);
      setFeaturedReviews(featuredReviewsRes.data?.reviews || []);
      console.log(featuredReviewsRes)
    } catch (error) {
      toast.error("get product error")
    } finally {
      // setProductLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <HeroSection />
      <BrandLogosSection />
      <NewArrivalsSection data={newArrivals} getProductLoading={getProductLoading} />
      <TopSellingSection data={topSelling} getProductLoading={getProductLoading} />
      <BrowseByStyleSection />
      <CustomerReviews data={featuredReviews} getProductLoading={getProductLoading} />
    </>
  );
};

export default Home;