import { cn } from "@/lib/utils";
import type React from "react";

const WrapperContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("w-full px-6 sm:px-9 lg:px-14 xl:px-24", className)}>
            {children}
        </div>
    )
}

export default WrapperContent;