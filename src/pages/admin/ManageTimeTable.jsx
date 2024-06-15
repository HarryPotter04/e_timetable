import React, { useState } from 'react'
import DashboardLayout from './../../components/layouts/DashboardLayout'
import TableSkeletonLoader from '../../components/skeleton/TableSkeletonLoader'
import timetable from './../../json/timetable.json'
import TimeTable from '../../components/admin/timetable/TimeTable'
import BreadCrumb from '../../components/Breadcrumb'
import TimeTableSearch from '../../components/admin/timetable/TimeTableSearch'

const ManageTimeTable = () => {

    const [loading, setLoading] = useState(true)
    const [ search, setSearch ] = useState(null)

    console.log(search);

    setTimeout(() => {
        setLoading(false)
    }, 1000);


    const handleFormSubmit = (formValues) => {
        setSearch(formValues)
    };

    return (
        <DashboardLayout>

            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/admin/dashboard" },
                    { title: "TimeTable Management" },
                ]}
            />

            <TimeTableSearch onFormSubmit={handleFormSubmit} />

            <button className="btn btn-primary py-2.5 rounded-full text-xs my-5">Create Timetable</button>

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <TimeTable datas={timetable} />

                )}

            </div>

        </DashboardLayout>
    )
}

export default ManageTimeTable