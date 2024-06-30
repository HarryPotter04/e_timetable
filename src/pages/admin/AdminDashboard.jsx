import React, { useState } from "react";
import DashboardLayout from "./../../components/layouts/DashboardLayout";
import Overview from "../../components/admin/Overview";
import TableSkeletonLoader from "../../components/skeleton/TableSkeletonLoader";
import DashboardTable from "../../components/admin/dashboard/DashboardTable";
import DashboardSearch from "../../components/DashboardSearch";
import BreadCrumb from "../../components/Breadcrumb";

import { useSelector } from "react-redux";
import { timetableState } from "../../features/slices/timetable/timetableSlice";
import TimeTableSearch from "../../components/admin/timetable/TimeTableSearch";

const AdminDashboard = () => {
  const { timetables, loading } = useSelector(timetableState);

  return (
    <DashboardLayout>
      <BreadCrumb segments={[{ title: "Dashboard" }]} />

      {/* OVERVIEW */}
      <Overview />

      <div className="mt-10">
        {/* <DashboardSearch search={search} setSearch={setSearch} /> */}
        <TimeTableSearch  />
      </div>

      <div className="bg-white px-2 py-3 rounded-lg mt-4">
        {loading ? (
          <TableSkeletonLoader count={12} height={40} />
        ) : (
          <DashboardTable datas={timetables} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
