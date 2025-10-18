import React, { useCallback, useEffect, useRef, useState } from 'react';

type ModalReturn = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
    modalRef?: React.MutableRefObject<HTMLDivElement | null>
}

export const useModal = ({
    initialState = false,
    closeOnOutsideClick = true
}: {
    initialState?: boolean,
    closeOnOutsideClick?: boolean
} = {}): ModalReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const toggleModal = useCallback(() => setIsOpen(prev => !prev), []);

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
    }, [isOpen, closeOnOutsideClick, closeModal]);

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

    return { isOpen, openModal, closeModal, toggleModal, modalRef }
};