import { KeyRound, LogOut, MapPin, Settings, ShoppingBag, User } from 'lucide-react'
import Overview from "./tabs/Overview";
import PersonalInfo from "./tabs/PersonalInfo";
import Orders from "./tabs/Orders";
import Addresses from "./tabs/Addresses";
import ChangePassword from "./tabs/ChangePassword";
import type { LucideIcon } from 'lucide-react'
 
interface ProfileNavItem {
    id: string;
    label: string;
    icon: LucideIcon;
    component: React.ComponentType; // component reference
}

export const profileNav: ProfileNavItem[] = [
    { id: 'overview', label: 'Overview', icon: User, component: Overview },
    { id: 'personal-info', label: 'Personal info', icon: Settings, component: PersonalInfo },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, component: Orders },
    { id: 'addresses', label: 'Addresses', icon: MapPin, component: Addresses },
    { id: 'change-password', label: 'Change password', icon: KeyRound, component: ChangePassword },
]

export const profileAction = [
    { id: 'logout', label: "Logout", icon: LogOut, action: 'logout' as const }
]