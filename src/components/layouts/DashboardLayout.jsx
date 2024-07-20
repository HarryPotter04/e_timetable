import React, { useState, useEffect } from 'react';
import SideBar from '../admin/SideBar';
import NavBar from '../admin/Navbar';
import { getTimetable } from '../../features/slices/timetable/timetableSlice';
import { getDepartments } from '../../features/slices/timetable/departmentSlice';
import { getFacultys } from '../../features/slices/timetable/facultySlice';
import { useDispatch, useSelector } from 'react-redux';
import { getSessions } from '../../features/slices/timetable/sessionSlice';
import { getSemesters } from '../../features/slices/timetable/semesterSlice';
import { getLevels } from '../../features/slices/timetable/levelSlice';
import { getDays } from '../../features/slices/days/daysSlice';
import { getUserState } from '../../features/slices/admin/getUserSlice';

const DashboardLayout = ({ children }) => {

    const {userData} = useSelector(getUserState)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTimetable())
        dispatch(getDepartments())
        dispatch(getFacultys())
        dispatch(getSessions())
        dispatch(getSemesters())
        dispatch(getLevels())
        dispatch(getDays())
      },[dispatch])

    const [open, setOpen] = useState(false)
    
    return (
        <div className='m-0 text-base antialiased'>

            <SideBar user={userData} open={open} setOpen={setOpen} />

            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                <NavBar user={userData} open={open} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto bg-[#F4F7FE]">

                    {children}

                </div>

            </main>

        </div>
    )
}

export default DashboardLayout;
