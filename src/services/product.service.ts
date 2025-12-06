import type { BackendResponse, ProductCard, ProductsPayload } from '@/types';
import api from './axios';

export const productService = {
    // get new arrivals
    getNewArrivals: async (limit: number) => {
        const res = await api.get<BackendResponse<ProductsPayload<ProductCard>>>(`/products/new-arrivals?limit=${limit}`);
        return res.data;
    },

    // get top selling
    getTopSelling: async (limit: number) => {
        const res = await api.get<BackendResponse<ProductsPayload<ProductCard>>>(`/products/top-selling?limit=${limit}`);
        return res.data;
    },
};

