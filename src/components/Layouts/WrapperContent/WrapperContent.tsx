import type React from "react";

const WrapperContent = ({ children }: { children: React.ReactNode}) => {
    return (
        <div className="w-full px-6 sm:px-9 lg:px-14 xl:px-24">
            {children}
        </div>
    )
}

export default WrapperContent;