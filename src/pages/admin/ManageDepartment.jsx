import DashboardLayout from './../../components/layouts/DashboardLayout'
import DepartmentOverview from '../../components/admin/departments/DepartmentOverview'
import FacultyContainer from '../../components/admin/departments/faculty/FacultyContainer'
import DepartmentContainer from '../../components/admin/departments/dpment/DepartmentContainer'
import BreadCrumb from '../../components/Breadcrumb'
import AddDepartment from '../../components/admin/departments/dpment/AddDepartment'
import { useState } from 'react'
import AddFaculty from '../../components/admin/departments/faculty/AddFaculty'

const ManageDepartment = () => {

    const [ open, setOpen ] = useState(false)
    const [ openFt, setOpenFt ] = useState(false)

    return (
        <DashboardLayout>

            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/admin/dashboard" },
                    { title: "Departments Management" },
                ]}
            />

            {/* OVERVIEW */}
            <DepartmentOverview />

            <div className="flex items-center gap-x-3 my-8">

                <button onClick={() => setOpenFt(true)} className="btn btn-primary py-2.5 rounded-full text-xs">Add Faculty</button>

                <button onClick={() => setOpen(true)} className="btn bg-slate-600 text-white py-2.5 rounded-full text-xs">Add Department</button>

            </div>

            {/* FACULTY */}
            <FacultyContainer />

            {/* DEPARTMENT */}
            <DepartmentContainer />

            <AddDepartment open={open} setOpen={setOpen} />
            <AddFaculty open={openFt} setOpen={setOpenFt} />

        </DashboardLayout>
    )
}

export default ManageDepartment