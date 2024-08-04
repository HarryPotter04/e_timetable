import DashboardLayout from './../../components/layouts/DashboardLayout'
import BreadCrumb from '../../components/Breadcrumb'
import { useState } from 'react'
import SemesterContainer from '../../components/admin/semester/SemesterContainer'
import AddSemester from '../../components/admin/semester/AddSemester'
import SessionContainer from '../../components/admin/session/SessionContainer'
import AddSession from '../../components/admin/session/AddSession'
import AddLevel from '../../components/admin/levels/AddLevel'
import LevelContainer from '../../components/admin/levels/LevelContainer'

const ManageSessions = () => {

    const [open, setOpen] = useState(false)
    const [openLevel, setOpenLevel] = useState(false)
    const [openSemester, setOpenSemester] = useState(false)

    return (
        <DashboardLayout>

            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/admin/dashboard" },
                    { title: "Sessions Management" },
                ]}
            />

            <div className="flex items-center gap-x-3 my-8">

                <button onClick={() => setOpen(true)} className="btn btn-primary py-2.5 rounded-full text-xs">Add Sessions</button>

                <button onClick={() => setOpenSemester(true)} className="btn bg-slate-600 text-white py-2.5 rounded-full text-xs">Add Semester</button>

                <button onClick={() => setOpenLevel(true)} className="btn bg-slate-600 text-white py-2.5 rounded-full text-xs">Add Levels</button>

            </div>

            {/* Session */}
            <SessionContainer />

            {/* Semester */}
            <SemesterContainer />

            <LevelContainer />

            {/* ADD MODALS */}
            <AddSemester open={openSemester} setOpen={setOpenSemester} />

            <AddSession open={open} setOpen={setOpen} />

            <AddLevel open={openLevel} setOpen={setOpenLevel} />

        </DashboardLayout>
    )
}

export default ManageSessions