import React, { useState } from 'react'
import DashboardLayout from './../../components/layouts/DashboardLayout'
import Overview from '../../components/admin/Overview'
import TableSkeletonLoader from '../../components/skeleton/TableSkeletonLoader'
import DashboardTable from '../../components/admin/dashboard/DashboardTable'
import sessions from './../../json/session.json'
import DashboardSearch from '../../components/DashboardSearch'
import BreadCrumb from '../../components/Breadcrumb'

const AdminDashboard = () => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  const initialFormData = {
    search: '',
  };

  const [search, setSearch] = useState(initialFormData);

  return (
    <DashboardLayout>

      <BreadCrumb
        segments={[
          { title: "Dashboard" }
        ]}
      />

      {/* OVERVIEW */}
      <Overview />

      <div className="mt-10">
        <DashboardSearch search={search} setSearch={setSearch} />
      </div>

      <div className="bg-white px-2 py-3 rounded-lg mt-4">

        {loading ? (

          <TableSkeletonLoader count={12} height={40} />

        ) : (

          <DashboardTable datas={sessions} />

        )}

      </div>

    </DashboardLayout>
  )
}

export default AdminDashboard