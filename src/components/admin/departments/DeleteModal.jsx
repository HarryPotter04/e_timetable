import DialogContainer from "../../ui/modals/Dialog";
import Button from "../../ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDepartment,
  departmentState,
} from "../../../features/slices/timetable/departmentSlice";
import {
  deleteFaculty,
  facultyState,
} from "../../../features/slices/timetable/facultySlice";
import {
  deleteTimetable,
  timetableState,
} from "../../../features/slices/timetable/timetableSlice";
import {
  deleteUser,
  registerState,
} from "../../../features/slices/admin/registerSlice";
import {
  deleteSemester,
  semesterState,
} from "../../../features/slices/timetable/semesterSlice";
import {
  deleteSession,
  sessionState,
} from "../../../features/slices/timetable/sessionSlice";
import {
  deleteLevel,
  levelState,
} from "../../../features/slices/timetable/levelSlice";

const DeleteModal = ({ data, openDel, setOpenDel, name }) => {
  const { loading } = useSelector(departmentState);
  const { loading: fctyLoading } = useSelector(facultyState);
  const { loading: tLoading } = useSelector(timetableState);
  const { loading: userLoading } = useSelector(registerState);
  const { loading: semesterLoading } = useSelector(semesterState);
  const { loading: sessionLoading } = useSelector(sessionState);
  const { loading: levelLoading } = useSelector(levelState);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    name === "department" && dispatch(deleteDepartment(id));
    name === "faculty" && dispatch(deleteFaculty(id));
    name === "timetable entry" && dispatch(deleteTimetable(id));
    name === "staff" && dispatch(deleteUser(id));
    name === "semester" && dispatch(deleteSemester(id));
    name === "session" && dispatch(deleteSession(id));
    name === "level" && dispatch(deleteLevel(id));
  };

  const closeDialog = () => {
    setOpenDel(false);
  };

  return (
    <DialogContainer
      open={openDel}
      onClose={closeDialog}
      backdropClick={true}
      size="small"
    >
      <div className="p-5">
        <h1>
          Are you sure you want to delete "
          {name === "timetable entry"
            ? `${data?.course || data?.course_code} on ${data?.day.name}`
            : data?.name || data?.fullname || data?.years_name}
          "
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">
          <Button
            onClick={() => setOpenDel(false)}
            type="button"
            color="text-primary font-medium"
            className=" py-3 w-full order-2 sm:order-1"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            color="bg-danger"
            className=" py-3 w-full order-1 sm:order-2 text-white"
            loading={
              name === "department"
                ? loading
                : name === "faculty"
                ? fctyLoading
                : name === "staff"
                ? userLoading
                : name === "semester"
                ? semesterLoading
                : name === "session"
                ? sessionLoading
                : name === "level"
                ? levelLoading
                : name === "timetable entry" && tLoading
            }
            onClick={() => handleDelete(data.id)}
          >
            Delete {name[0].toUpperCase() + name.slice(1)}
          </Button>
        </div>
      </div>
    </DialogContainer>
  );
};

export default DeleteModal;
