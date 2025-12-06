import type { BackendResponse, ReviewCard, ReviewsPayload } from '@/types';
import api from './axios';

export const reviewService = {
    // get featured reviews
    getFeaturedReviews: async () => {
        const res = await api.get<BackendResponse<ReviewsPayload<ReviewCard>>>('/reviews/featured-reviews');
        return res.data;
    }
};