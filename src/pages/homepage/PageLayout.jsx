import { useDispatch } from "react-redux";
import { getTimetable } from "../../features/slices/timetable/timetableSlice";
import { getDepartments } from "../../features/slices/timetable/departmentSlice";
import { getFacultys } from "../../features/slices/timetable/facultySlice";
import { getSessions } from "../../features/slices/timetable/sessionSlice";
import { getSemesters } from "../../features/slices/timetable/semesterSlice";
import { getLevels } from "../../features/slices/timetable/levelSlice";
import { getDays } from "../../features/slices/days/daysSlice";

import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Footer from "./components/Footer";

const PageLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimetable());
    dispatch(getDepartments());
    dispatch(getFacultys());
    dispatch(getSessions());
    dispatch(getSemesters());
    dispatch(getLevels());
    dispatch(getDays());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
