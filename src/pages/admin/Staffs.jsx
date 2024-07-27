import { useState } from 'react';
// import DashboardSearch from '../../components/DashboardSearch';
import TableSkeletonLoader from '../../components/skeleton/TableSkeletonLoader'
import DashboardLayout from './../../components/layouts/DashboardLayout'
import StaffTable from '../../components/admin/staffs/StaffTable';
import BreadCrumb from '../../components/Breadcrumb';
import AddStaffModal from '../../components/admin/staffs/AddStaffModal';
import { useSelector } from 'react-redux';
import { registerState } from '../../features/slices/admin/registerSlice';

const ManageStaff = () => {

    const {loading, users} = useSelector(registerState)

    // const initialFormData = {
    //     search: '',
    // };

    // const [search, setSearch] = useState(initialFormData);
    const [open, setOpen] = useState(false)

    return (
        <DashboardLayout>

            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/admin/dashboard" },
                    { title: "Staff Management" },
                ]}
            />

            <button onClick={() => setOpen(true)} className="btn btn-primary py-2.5 rounded-full text-xs mt-5 mb-8">Add Staff</button>

            {/* <DashboardSearch search={search} setSearch={setSearch} /> */}

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <StaffTable datas={users} />

                )}

            </div>

            <AddStaffModal open={open} setOpen={setOpen} />

        </DashboardLayout>
    )
}

export default ManageStaff