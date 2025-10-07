import React, { useCallback, useEffect, useRef, useState } from 'react';

type useModalReturn = {
    isOpen?: boolean;
    openModal?: () => void;
    closeModal?: () => void;
    toggleModal?: () => void;
    modalRef?: React.MutableRefObject<HTMLDivElement | null>
}

export const useModal = ({
    initialState = false,
    closeOnOutsideClick = true
}: {
    initialState?: boolean,
    closeOnOutsideClick?: boolean
} = {}): useModalReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                closeOnOutsideClick &&
                isOpen &&
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, closeOnOutsideClick]);

    // prevent scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const toggleModal = useCallback(() => setIsOpen(prev => !prev), []);

    console.log(isOpen);


    return { isOpen, openModal, closeModal, toggleModal, modalRef }
};