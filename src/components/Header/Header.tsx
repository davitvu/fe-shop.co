import { Menu, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { headerActions, mainNav, userOptions } from './constants';
import { useModal } from '@/hooks/useModal';
import SearchBox from './components/SearchBox';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '../Logo/Logo';
import WrapperContent from '../Layouts/WrapperContent/WrapperContent';
import { cn } from '@/lib/utils';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navModal = useModal();
    const userModal = useModal();
    const navigate = useNavigate();

    return (
        <header className='fixed top-0 left-0 right-0 w-full h-[70px] bg-white shadow-2xs flex items-center z-50'>
            <WrapperContent>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <div className='active:scale-85 transition-transform lg:hidden cursor-pointer'
                            onClick={navModal.openModal}
                        >
                            <Menu />
                        </div>
                        <div className='pr-1 lg:pr-4'>
                            <Logo className='text-4xl' />
                        </div>
                    </div>
                    <div ref={navModal.modalRef} className={cn(navModal.isOpen ? "flex lg:hidden" : 'hidden lg:flex', 'navLinkModal absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-8 py-10 shadow-2xl bg-black w-[95vw] rounded-2xl flex-col gap-3 lg:gap-10 lg:w-auto lg:flex-row lg:static lg:rounded-none lg:m-0 lg:p-0 lg:translate-0 lg:bg-transparent')}>
                        {mainNav.map((item) => (
                            <div key={item.id}>
                                <Link to={item.href!} className='hover:underline text-white font-medium text- lg:text-black'>{item.label}</Link>
                            </div>
                        ))}
                    </div>
                    <div className='hidden sm:block'>
                        <SearchBox loading={false} />
                    </div>
                    <div className='ml-auto mr-5 block sm:hidden'>
                        <div className='cursor-pointer' onClick={() => { }}>
                            <Search />
                        </div>
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
                                    <div className='cursor-pointer' key={item.id} onClick={item.id === 'user' && isAuthenticated ? () => userModal?.toggleModal!() : () => { navigate('/login') }}>
                                        {item.icon}
                                    </div>
                                )
                            ))}
                        </div>
                        {(isAuthenticated && userModal.isOpen) && (
                            <div ref={userModal.modalRef} className='absolute top-full mt-2.5 right-0 w-[135px] bg-white shadow-2xl overflow-hidden rounded-2xl'>
                                {userOptions.map((o) => {
                                    if (o.href) {
                                        return <Link to={o.href} className='block bg-white py-2 px-3 hover:bg-[#f0f0f0]'>{o.label}</Link>
                                    }
                                    if (o.onClick) {
                                        return <p onClick={o.id === 'logout' ? logout : o.onClick} className='bg-white py-2 px-3 hover:bg-[#f0f0f0] cursor-pointer'>{o.label}</p>
                                    }
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </WrapperContent>
        </header>
    )
}

export default Header;