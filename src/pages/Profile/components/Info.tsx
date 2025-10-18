import type { User } from "@/types";
import { ShoppingCart } from "lucide-react";

const Info = ({ user: { 
    avatar = '' ,
    firstName = '',
    lastName = '',
    email = '',
    createdAt = ''
} }: { user: User }) => {
    return (
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between p-4">
            <div className="flex gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img src={avatar} alt={firstName + lastName}
                        className="w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold">{firstName + lastName}</p>
                    <p className="text-sm">{email}</p>
                    <p className="text-sm">Join on {createdAt}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-6xl">
                    <ShoppingCart className="w-12 h-12" />
                </div>
                <div>
                    <p className="font-bold text-2xl">0</p>
                    <p className="text-sm">Total order</p>
                </div>
            </div>
        </div>
    )
}

export default Info;