import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SidebarLink from '../SidebarLink';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Avatar from '../Avatar';
import DashboardIcon from '../icons/DashboardIcon';
import SettingsIcon from '../icons/SettingsIcon';
import Logo from './../../assets/images/logo.jpg'
import ReportIcon from '../icons/ReportIcon';
import PeopleIcon from '../icons/PeopleIcon';
import InsightIcon from '../icons/InsightIcon';

const SideBar = ({ open, setOpen, user }) => {

    const location = useLocation();
    // const dispatch = useDispatch();

    const links = [
        {
            href: '/admin/dashboard/timetable',
            icon: <ReportIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <ReportIcon className='w-5 h-5' color='#186784' />,
            text: 'Manage Timetables'
        },
        {
            href: '/admin/dashboard/departments',
            text: 'Manage Departments',
            icon: <InsightIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <InsightIcon className='w-5 h-5' color='#186784' />
        },
        {
            href: '/admin/dashboard/staffs',
            text: 'Manage Staffs',
            icon: <PeopleIcon className='w-5 h-5' color='#FFF' />,
            activeIcon: <PeopleIcon className='w-5 h-5' color='#186784' />
        }
    ];

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 block lg:hidden z-20"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`sidebar fixed inset-y-0 left-0 flex-wrap items-center justify-between scrollbar-none overflow-x-hidden block p-0 pb-10 transition-all duration-200 -translate-x-full bg-primary border-0 z-10 ${open && 'translate-x-0'} max-w-64 xl:translate-x-0 w-[270px] z-[3000]`}>

                <div className="sticky top-0 bg-blue w-full z-[300] pb-4">
                    <div className="xl:hidden" onClick={() => setOpen(false)}>
                        <i className="absolute top-3 right-0 p-4 opacity-50 cursor-pointer text-white">
                            <XMarkIcon className='h-6 w-6' />
                        </i>
                    </div>

                    <Link to="/admin/dashboard" className="block px-8 py-8 mx-auto text-center text-sm whitespace-nowrap border-b border-white/10" onClick={handleLinkClick}>
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-full max-w-full max-h-20 m-auto"
                        />
                    </Link>

                </div>

                <div className="pt-4 overflow-y-auto">
                    <div className="items-center block w-full h-auto grow basis-full px-4">
                        <ul className="flex flex-col pl-0 mb-0 list-none">
                            <li className="w-full mb-2.5">
                                <SidebarLink
                                    href='/admin/dashboard'
                                    icon={<DashboardIcon className='w-5 h-5' color='#FFF' />}
                                    activeIcon={<DashboardIcon className='w-5 h-5' color='#186784' />}
                                    text='Dashboard'
                                    isActive={location.pathname === '/admin/dashboard'}
                                    onClick={handleLinkClick}
                                />
                            </li>

                            {links.map((link, index) => (
                                <li key={index} className="w-full mb-2.5">
                                    <SidebarLink
                                        href={link.href}
                                        icon={link.icon}
                                        text={link.text}
                                        activeIcon={link.activeIcon}
                                        isActive={location.pathname.startsWith(link.href)}
                                        onClick={handleLinkClick}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative px-4">
                        <hr className="mt-3 mb-6 border-t border-white/10" />
                        <ul className="flex flex-col pl-0 mb-0 list-none">
                            <li className="w-full mb-2.5">
                                <SidebarLink
                                    href='/admin/dashboard/settings'
                                    icon={<SettingsIcon className='w-5 h-5' color='#FFF' />}
                                    activeIcon={<SettingsIcon className='w-5 h-5' color='#186784' />}
                                    text='Settings'
                                    isActive={location.pathname === '/admin/dashboard/settings'}
                                    onClick={handleLinkClick}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-x-3 px-4 pt-12 absolute bottom-10">
                    <Avatar name={user?.fullname} size="h-10 w-10" bgColor="bg-white" textColor="text-dark" fontSize="text-base" />
                    <Link to='/admin/dashboard/settings' className="flex-1">
                        <span className='text-white text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis'>
                            {user?.fullname}
                        </span>
                        <p className='text-white text-[11px] font-light -mt-2'>{user?.email}</p>
                    </Link>
                    {/* <button onClick={() => dispatch(Adminlogout())} className="cursor-pointer">
                        <LogoutIcon className='w-6 h-6' color='#FFF' />
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default SideBar;
