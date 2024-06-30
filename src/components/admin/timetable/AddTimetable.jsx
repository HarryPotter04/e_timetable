  import DialogContainer from "../../ui/modals/Dialog";
import { Form, Formik } from "formik";
import CustomInput from "../../FormElements/CustomInput";
import Button from "../../ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { facultyState } from "../../../features/slices/timetable/facultySlice";
import { departmentState } from "../../../features/slices/timetable/departmentSlice";
import { sessionState } from "../../../features/slices/timetable/sessionSlice";
import { levelState } from "../../../features/slices/timetable/levelSlice";
import { semesterState } from "../../../features/slices/timetable/semesterSlice";
import { daysState } from "../../../features/slices/days/daysSlice";
import CustomSelect from "../../FormElements/CustomSelect";
import { addTimetable } from "../../../utils/schema";
import {
  createTimetable,
  editTimetable,
  timetableState,
} from "../../../features/slices/timetable/timetableSlice";

const AddTimetable = ({ open, setOpen, data }) => {
  const { facultys } = useSelector(facultyState);
  const { departments } = useSelector(departmentState);
  const { sessions } = useSelector(sessionState);
  const { levels } = useSelector(levelState);
  const { semesters } = useSelector(semesterState);
  const { days } = useSelector(daysState);

  const { loading } = useSelector(timetableState);

  const dispatch = useDispatch();

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogContainer
        open={open}
        onClose={closeDialog}
        backdropClick={true}
        size="medium"
      >
        <div className="p-5">
          <Formik
            initialValues={{
              faculty: data?.faculty.name || "",
              department: data?.department.name || "",
              session: data?.session.years_name || "",
              level: data?.level.name || "",
              semester: data?.semester.name || "",
              day: data?.day.name || "",
              course: data?.course || "",
              course_code: data?.course_code || "",
              instructor: data?.instructor || "",
              room: data?.room || "",
              start_time: data?.start_time || "",
              end_time: data?.end_time || "",
            }}
            validationSchema={addTimetable}
            onSubmit={async (values, actions) => {
              if (data) {
                const { id } = data;
                dispatch(editTimetable({ id, values }));
              } else {
                dispatch(createTimetable(values));
              }
            }}
          >
            {(props) => (
              <Form autoComplete="off">
                <div className="flex items-center space-x-4">
                  <CustomSelect name="faculty">
                    <option value="" disabled selected>
                      {" "}
                      Select Faculty{" "}
                    </option>
                    {facultys?.map((faculty) => (
                      <option key={faculty.acronym} value={faculty.name}>
                        {faculty.name}
                      </option>
                    ))}
                  </CustomSelect>

                  <CustomSelect name="department">
                    <option value="" disabled selected>
                      {" "}
                      Select Department{" "}
                    </option>
                    {departments?.map((department) => (
                      <option key={department.id} value={department.name}>
                        {department.name}
                      </option>
                    ))}
                  </CustomSelect>

                  <CustomSelect name="session">
                    <option value="" disabled selected>
                      {" "}
                      Select Session{" "}
                    </option>
                    {sessions?.map((session) => (
                      <option key={session.id} value={session.years_name}>
                        {session.years_name}
                      </option>
                    ))}
                  </CustomSelect>
                </div>

                <div className="flex items-center space-x-4">
                  <CustomSelect name="level">
                    <option value="" disabled selected>
                      {" "}
                      Select Level{" "}
                    </option>
                    {levels?.map((level) => (
                      <option key={level.id} value={level.name}>
                        {level.name}
                      </option>
                    ))}
                  </CustomSelect>

                  <CustomSelect name="semester">
                    <option value="" disabled selected>
                      {" "}
                      Select Semester{" "}
                    </option>
                    {semesters?.map((semester) => (
                      <option key={semester.id} value={semester.name}>
                        {semester.name}
                      </option>
                    ))}
                  </CustomSelect>
                  <CustomSelect name="day">
                    <option value="" disabled selected>
                      {" "}
                      Select Day{" "}
                    </option>
                    {days?.map((day) => (
                      <option key={day.id} value={day.name}>
                        {day.name}
                      </option>
                    ))}
                  </CustomSelect>
                </div>

                <div className="flex items-center space-x-4">
                  <CustomInput
                    name="course"
                    type="text"
                    placeholder="Course Title"
                  />
                  <CustomInput
                    name="course_code"
                    type="text"
                    placeholder="Course Code e.g Com 111"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <CustomInput
                    name="instructor"
                    type="text"
                    placeholder="Instructor, Mr...."
                  />
                  <CustomInput
                    name="room"
                    type="text"
                    placeholder="Room or Hall name"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <CustomInput
                    label="Start Time"
                    name="start_time"
                    type="text"
                    placeholder="10:00 AM"
                  />
                  <CustomInput
                    label="End Time"
                    name="end_time"
                    type="text"
                    placeholder="12:00 PM"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">
                  <Button
                    onClick={() => setOpen(false)}
                    type="button"
                    color="text-primary font-medium"
                    className=" py-3 w-full order-2 sm:order-1"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    color="btn-primary"
                    className=" py-3 w-full order-1 sm:order-2"
                    loading={loading}
                  >
                    {data ? "Edit Timetable Entry" : "Add Timetable Entry"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContainer>
    </>
  );
};

export default AddTimetable;
