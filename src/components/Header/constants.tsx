import { useAuth } from "@/context/Auth.context";
import type { HeaderType } from "@/types";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

// const { logout } = useAuth();


export const mainNav: HeaderType[] = [
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'sale', label: 'On Sale', href: '/sale' },
    { id: 'new', label: 'New Arrivals', href: '/new' },
    { id: 'brands', label: 'Brands', href: '/brands' },
]

export const headerActions: HeaderType[] = [
    {
        id: 'search',
        icon: <Search />,
        onClick: () => console.log('Open search modal'),
    },
    {
        id: 'cart',
        icon: <ShoppingCart />,
        href: '/account',
        badgeCount: true
    },
    {
        id: 'user',
        icon: <CircleUserRound />,
        onClick: () => console.log('Open cart sidebar'),
    },
]

export const userOptions: HeaderType[] = [
    { id: 'profile', label: 'Profile', href: '/profile' },
    { id: 'cart', label: 'Cart', href: '/cart' },
    { id: 'logout', label: 'Logout', onClick: () => {} },
]