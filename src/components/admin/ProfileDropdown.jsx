import React, { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../features/slices/admin/userLoginSlice';

const ProfileDropdown = ({ user }) => {

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    // USE REF AND OUTSIDE CLICK
    const profileMenu = useRef(null);

    const handleClickOutside = (event) => {
        if (profileMenu.current && !profileMenu.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside of the mega menu
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Remove the event listener when the component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeDropdown = () => {
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };

    return (
        <div ref={profileMenu} className="relative inline-flex">

            <div onClick={toggleDropdown} className="flex items-center gap-x-2 cursor-pointer w-full">

                <Avatar name={user?.fullname} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />

                <div className=" max-w-[120px] tracking-tighter hidden sm:block">
                    <span className='text-dark text-xs font-semibold overflow-hidden overflow-ellipsis'> {user?.fullname} </span>
                    <p className='text-slate-600 text-[11px] font-light mt-0 overflow-hidden overflow-ellipsis'> {user?.email} </p>
                </div>

                <div className="hidden sm:block">
                    {open ? (
                        <ChevronUpIcon className="h-3.5 w-3.5 text-black" />
                    ) : (
                        <ChevronDownIcon className="h-3.5 w-3.5 text-black" />
                    )}
                </div>

            </div>

            <div className={`z-10 duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'}  right-1 top-12 bg-white rounded-lg shadow min-w-52 absolute py-4`}>

                <div className="border-b border-[#5862831A] pb-4 mb-3">

                    <div className="flex items-center gap-x-3 px-4">

                        <Avatar name={user?.fullname} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />

                        <div className="flex-1 tracking-tight">
                            <div className='text-dark text-xs font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.fullname} </div>
                            <p className='text-slate-600 text-[11px] font-light -mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.email} </p>
                        </div>

                    </div>

                </div>

                <div className="px-4 space-y-3">

                    {/* <Link onClick={closeDropdown} href="/admin/dashboard/settings" className="block w-full cursor-pointer text-slate-600 hover:text-dark">
                        Account Settings
                    </Link>

                    <Link onClick={closeDropdown} href="#" className="block w-full cursor-pointer text-slate-600 hover:text-dark">
                        Help Desk
                    </Link> */}

                    <Link to="#" onClick={() => logoutAction()} className="block w-full cursor-pointer text-slate-600 hover:text-dark">
                        Sign Out
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default ProfileDropdown