import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { facultyState } from "../../../features/slices/timetable/facultySlice";
import { departmentState } from "../../../features/slices/timetable/departmentSlice";
import { semesterState } from "../../../features/slices/timetable/semesterSlice";
import { levelState } from "../../../features/slices/timetable/levelSlice";
import { sessionState } from "../../../features/slices/timetable/sessionSlice";
import { getTimetableSearch } from "../../../features/slices/timetable/timetableSlice";
import errorToast from "../../../utils/errorToast";

const TimeTableSearch = () => {
  const { facultys } = useSelector(facultyState);
  const { departments } = useSelector(departmentState);
  const { semesters } = useSelector(semesterState);
  const { levels } = useSelector(levelState);
  const { sessions } = useSelector(sessionState);

  const dispatch = useDispatch();

  const initialFormValues = {
    faculty: "",
    department: "",
    semester: "",
    level: "",
    session: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const { faculty, department, semester, level, session } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    faculty && department && semester && level && session
      ? dispatch(getTimetableSearch(formValues))
      : errorToast("Select all fields for accurate results");
  };

  const handleClear = () => {
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 mb-3"
      >
        <select
          className="form-control py-2"
          name="faculty"
          value={formValues.faculty}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Faculty
          </option>
          {facultys.map((faculty) => (
            <option key={faculty.id} value={faculty.name}>
              {faculty.name}
            </option>
          ))}
        </select>

        <select
          className="form-control py-2"
          name="department"
          value={formValues.department}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Department
          </option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>

        <select
          className="form-control py-2"
          name="semester"
          value={formValues.semester}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Semester
          </option>
          {semesters.map((semester) => (
            <option key={semester.id} value={semester.id}>
              {semester.name}
            </option>
          ))}
        </select>

        <select
          className="form-control py-2"
          name="level"
          value={formValues.level}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Level
          </option>
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}
            </option>
          ))}
        </select>

        <select
          className="form-control py-2"
          name="session"
          value={formValues.session}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Session
          </option>
          {sessions.map((session) => (
            <option key={session.id} value={session.id}>
              {session.years_name}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-3">
          <button
            className="btn btn-primary rounded-xl text-xs px-8 text-white py-2"
            type="submit"
          >
            Search
          </button>

          <button
            className="btn bg-danger rounded-xl text-xs px-8 text-white py-2"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimeTableSearch;
