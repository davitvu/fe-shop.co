import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { headerActions, mainNav } from './constants';
import { useModal } from '@/hooks/useModal';

const Header = () => {
    const navModal = useModal();
    const userModal = useModal();

    console.log(userModal.isOpen);


    return (
        <header className='relative w-full h-[57px] px-4 flex justify-between items-center'>
            <div className='flex gap-5'>
                <div className='active:scale-85 transition-transform lg:hidden'
                    onClick={navModal.isOpen ? navModal.closeModal : navModal.openModal}
                >
                    <Menu />
                </div>
                <h1><Link to={'/'} className='text-black font-black'>SHOP.CO</Link></h1>
                {navModal.isOpen && (
                    <div ref={navModal.modalRef} className={`flex navLinkModal absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-8 py-10 shadow-2xl bg-black w-[95vw] rounded-2xl flex-col gap-3 lg:flex-row lg:static lg:rounded-none lg:m-0 lg:p-0 lg:translate-0 lg:bg-white`}>
                        {mainNav.map((item) => (
                            <div key={item.id}>
                                <Link to={item.href!} className='hover:underline text-white text-xl lg:text-base lg:text-black'>{item.label}</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='relative'>
                <div className='flex gap-5'>
                    {headerActions.map((item) => (
                        item.badgeCount ? (
                            <div key={item.id} className='relative cursor-pointer'>
                                {item.icon}
                                <div className='flex items-center justify-center text-xs absolute top-[-5px] right-[-5px] w-4 h-4 bg-zinc-100 text-black rounded-full'>0</div>
                            </div>
                        ) : (
                            <div className='cursor-pointer' key={item.id} onClick={item.id === 'user' ? () => userModal?.toggleModal!() : () => { }}>
                                {item.icon}
                            </div>
                        )
                    ))}
                </div>
                {userModal.isOpen && (
                    <div ref={userModal.modalRef} className='absolute top-full mt-2.5 right-0 w-[125px] bg-white shadow-2xl p-2.5 rounded-2xl'>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;