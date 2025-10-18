import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const LogoFixed = () => {
    return (
        <div className='fixed top-0 left-0 p-5'>
            <Link to={'/'} className='font-black text-2xl inline-block transition-transform active:scale-95'>SHOP.CO</Link>
        </div>
    )
}

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link to={'/'} className={cn('font-black text-2xl inline-block transition-transform active:scale-95', className)}>SHOP.CO</Link>
    )
}