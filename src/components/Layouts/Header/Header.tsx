import { Logo } from '@/components/Logo/Logo';
import { useAuth } from '@/context/AuthContext';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import WrapperContent from '../WrapperContent/WrapperContent';
import SearchBox from './components/SearchBox';
import { headerActions, mainNav, userOptions } from './constants';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('sidebar-drawer') as HTMLInputElement;
        if (drawerCheckbox) {
            drawerCheckbox.checked = false;
        }
    };

    return (
        <div className="drawer">
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* --- NAVBAR --- */}
                <header className='fixed top-0 left-0 right-0 w-full h-[70px] bg-white shadow-2xs flex items-center z-50'>
                    <WrapperContent>
                        <div className='flex justify-between items-center gap-5'>

                            {/* left: logo & mobile toggle */}
                            <div className='flex gap-3 items-center'>
                                <label
                                    htmlFor="sidebar-drawer"
                                    className='btn btn-ghost btn-square lg:hidden active:scale-90 transition-transform'
                                >
                                    <Menu size={24} />
                                </label>
                                <div className='pr-1 lg:pr-4'>
                                    <Logo className='text-4xl' />
                                </div>
                            </div>

                            {/* center: desktop navigation */}
                            <nav className='hidden lg:flex items-center gap-8'>
                                {mainNav.map((item) => (
                                    <div id={item.id}>
                                        {item.anchor ? (
                                            <ScrollLink
                                                to={item.href!}
                                                className='hover:underline text-white font-medium text- lg:text-black cursor-pointer'
                                                smooth={true}
                                                duration={600}
                                                offset={-150}
                                                activeClass="text-blue-600"
                                            >{item.label}</ScrollLink>
                                        ) : (
                                            <Link to={item.href!} className='hover:underline text-white font-medium lg:text-black'>{item.label}</Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* right: search & user action */}
                            <div className='flex items-center gap-2 sm:gap-5 ml-auto lg:grow lg:ml-5'>
                                {/* desktop search */}
                                <div className='hidden lg:block grow'>
                                    <SearchBox loading={false} />
                                </div>

                                {/* action icons: cart, user */}
                                <div className='flex items-center gap-1 sm:gap-3'>
                                    {headerActions.map((item) => (
                                        <div key={item.id} className="flex items-center">
                                            {item.badgeCount ? (
                                                <div className='indicator cursor-pointer p-2 hover:bg-zinc-100 rounded-full transition-colors'>
                                                    {item.icon}
                                                    <span className='indicator-item flex items-center justify-center badge-primary text-xs top-2 right-2 rounded-full bg-zinc-100 w-4 h-4'>0</span>
                                                </div>
                                            ) : (
                                                <div className='dropdown dropdown-end p-2 hover:bg-zinc-100 rounded-full transition-colors' >
                                                    {/* Dropdown */}
                                                    <div
                                                        tabIndex={0}
                                                        className='cursor-pointer'
                                                    >
                                                        {item.icon}
                                                    </div>
                                                    {isAuthenticated ? (
                                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm absolute right-0 top-11">
                                                            {userOptions.map((o) => (
                                                                <li key={o.id}>
                                                                    {o.href ? (
                                                                        <Link to={o.href} className='block bg-white py-2 px-3 hover:bg-[#f0f0f0]'>{o.label}</Link>
                                                                    ) : (
                                                                        <button onClick={o.id === 'logout' ? logout : o.onClick} className='btn bg-white py-2 px-3 hover:bg-[#f0f0f0] cursor-pointer'>{o.label}</button>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <div className='dropdown-content menu bg-base-100 rounded-box w-60 z-1 p-2 shadow-sm absolute right-0 top-11'>
                                                            <div className='flex gap-2'>
                                                                <Link to={"/login"} className='btn bg-white w-20 py-2 px-3 hover:bg-[#f0f0f0] cursor-pointer grow'>Login</Link>
                                                                <Link to={"/register"} className='btn bg-white w-20 py-2 px-3 hover:bg-[#f0f0f0] grow'>Signup</Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </WrapperContent>
                </header>
            </div>

            {/* --- SIDEBAR (Mobile) --- */}
            <div className="drawer-side z-[100]">
                <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-100 min-h-full w-72 p-6 flex flex-col gap-6">
                    <Logo className="text-3xl border-b pb-4" />

                    <ul className="flex flex-col gap-2">
                        {mainNav.map((item) => (
                            <li key={item.id}>
                                {item.anchor ? (
                                    <ScrollLink
                                        to={item.href!}
                                        onClick={closeDrawer}
                                        className='text-lg font-medium py-3'
                                        smooth={true}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                ) : (
                                    <Link to={item.href!} onClick={closeDrawer} className='text-lg font-medium py-3'>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* SearchBox in Sidebar for mobile */}
                    <div className="pt-3 border-t">
                        <p className="text-xs text-zinc-400 mb-2 uppercase font-bold">Tìm kiếm nhanh</p>
                        <SearchBox loading={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;