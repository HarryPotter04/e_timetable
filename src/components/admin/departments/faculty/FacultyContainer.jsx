import React, { useEffect, useState } from "react";
import DashboardSearch from "../../../DashboardSearch";
import TableSkeletonLoader from "../../../skeleton/TableSkeletonLoader";
import FacultyTable from "./FacultyTable";

import { useDispatch, useSelector } from "react-redux";
import {
  facultyState,
  getFacultySearch,
} from "../../../../features/slices/timetable/facultySlice";

const FacultyContainer = () => {
  const { loading, facultys } = useSelector(facultyState);

  const initialFormData = {
    search: "",
  };

  const [search, setSearch] = useState(initialFormData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFacultySearch(search.search));
  }, [search, dispatch]);

  return (
    <div className="mb-7">
      <h2 className="text-sm tracking-tight font-semibold mb-5">Faculties</h2>

      <DashboardSearch search={search} setSearch={setSearch} />

      <div className="bg-white px-2 py-3 rounded-lg mt-4">
        {loading ? (
          <TableSkeletonLoader count={12} height={40} />
        ) : (
          <FacultyTable datas={facultys} />
        )}
      </div>
    </div>
  );
};

export default FacultyContainer;
