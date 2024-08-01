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
import { deleteUser, registerState } from "../../../features/slices/admin/registerSlice";

const DeleteModal = ({ data, openDel, setOpenDel, name }) => {
  const { loading } = useSelector(departmentState);
  const { loading: fctyLoading } = useSelector(facultyState);
  const { loading: tLoading } = useSelector(timetableState);
  const { loading: UserLoading } = useSelector(registerState);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    name === "department" && dispatch(deleteDepartment(id));
    name === "faculty" && dispatch(deleteFaculty(id));
    name === "timetable" && dispatch(deleteTimetable(id));
    name === "staff" && dispatch(deleteUser(id))
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
          {name === "timetable"
            ? `${data?.course} on ${data?.day.name}`
            : data?.name || data?.fullname}
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
                ? UserLoading
                : name === "timetable" && tLoading
            }
            onClick={() => handleDelete(data.id)}
          >
            {name === "department"
              ? "Delete Department"
              : name === "faculty"
              ? "Delete Faculty"
              : name === "staff" 
              ? "Delete Staff"
              : name === "timetable" && "Delete Timetable Entry"}
          </Button>
        </div>
      </div>
    </DialogContainer>
  );
};

export default DeleteModal;
