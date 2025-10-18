import { useEffect } from "react";

export const useLockBodyScroll = () => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // console.log("originalStyle:", originalStyle);
        
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
};
