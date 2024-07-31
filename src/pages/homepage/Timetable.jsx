import { useSelector } from "react-redux";
import DashboardTable from "../../components/admin/dashboard/DashboardTable";
import TableSkeletonLoader from "../../components/skeleton/TableSkeletonLoader";
import { timetableState } from "../../features/slices/timetable/timetableSlice";
import TimeTableSearch from "../../components/admin/timetable/TimeTableSearch";
import PageLayout from "./PageLayout";

const Timetable = () => {
  const { timetables, loading } = useSelector(timetableState);
  return (
    <div className="bg-secondary">
      <PageLayout>
        <div className="m-5 pt-3">
          <TimeTableSearch />
        </div>
        <div className="bg-white px-2 py-3 rounded-lg mt-10 mx-5 shadow-md">
          {loading ? (
            <TableSkeletonLoader count={12} height={40} />
          ) : (
            <DashboardTable datas={timetables} isStudent={true} />
          )}
        </div>
      </PageLayout>
    </div>
  );
};

export default Timetable;
