import type { HeaderType } from "@/types";
import { CircleUserRound, ShoppingCart } from "lucide-react";

export const mainNav: HeaderType[] = [
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'newArrivals', label: 'New Arrivals', href: 'newArrivals', anchor: true },
    { id: 'topSelling', label: 'Top Selling', href: 'topSelling', anchor: true },
    { id: 'styles', label: 'Styles', href: 'styles', anchor: true },
]

export const headerActions: HeaderType[] = [
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