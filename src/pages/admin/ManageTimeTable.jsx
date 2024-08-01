import React, { useState } from "react";
import DashboardLayout from "./../../components/layouts/DashboardLayout";
import TableSkeletonLoader from "../../components/skeleton/TableSkeletonLoader";
import BreadCrumb from "../../components/Breadcrumb";
import TimeTableSearch from "../../components/admin/timetable/TimeTableSearch";
import AddTimetable from "../../components/admin/timetable/AddTimetable";
import { useSelector } from "react-redux";

import { timetableState } from "../../features/slices/timetable/timetableSlice";
import DashboardTable from "../../components/admin/dashboard/DashboardTable";

const ManageTimeTable = () => {
  const { timetables, loading } = useSelector(timetableState);

  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>
      <BreadCrumb
        segments={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: "TimeTable Management" },
        ]}
      />

      <TimeTableSearch />

      <button
        onClick={() => setOpen(true)}
        className="btn btn-primary py-2.5 rounded-full text-xs my-5"
      >
        Create Timetable Entry
      </button>

      <div className="bg-white px-2 py-3 rounded-lg mt-4">
        {loading ? (
          <TableSkeletonLoader count={12} height={40} />
        ) : (
          <DashboardTable datas={timetables} />
        )}
      </div>

      <AddTimetable open={open} setOpen={setOpen} />
    </DashboardLayout>
  );
};

export default ManageTimeTable;
