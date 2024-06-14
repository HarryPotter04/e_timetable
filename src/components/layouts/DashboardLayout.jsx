import React, { useState } from 'react';
import SideBar from '../admin/SideBar';
import NavBar from '../admin/Navbar';

const DashboardLayout = ({ children }) => {

    const [open, setOpen] = useState(false)

    const profile = {
        fullname: 'Adeoye Solomon',
        email: 'adeoyesolomon2693@gmail.com'
    }

    return (
        <div className='m-0 text-base antialiased'>

            <SideBar user={profile} open={open} setOpen={setOpen} />

            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                <NavBar user={profile} open={open} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto bg-[#F4F7FE]">

                    {children}

                </div>

            </main>

        </div>
    )
}

export default DashboardLayout;
