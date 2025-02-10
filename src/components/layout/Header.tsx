'use client';
import React, { useEffect, useState } from 'react';

const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>FREE SHIPPING ON ORDERS OVER $15.00 • FREE RETURNS</span>
            </div>
        </div>
    );
};

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY;

            if (scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 100) {
                setIsOpen(false);
            }

            setPrevScrollY(currentScrollY);
        };

        setPrevScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <header className='w-full sticky top-0 z-50'>
            <div className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <AnnouncementBar />
            </div>
        </header>

    )
}

export default Header