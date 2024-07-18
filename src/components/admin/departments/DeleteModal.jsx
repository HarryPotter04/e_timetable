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

const DeleteModal = ({ data, openDel, setOpenDel, name }) => {
  const { loading } = useSelector(departmentState);
  const { fctyLoading } = useSelector(facultyState);
  const { tLoading } = useSelector(timetableState);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    name === "department" && dispatch(deleteDepartment(id));
    name === "faculty" && dispatch(deleteFaculty(id));
    name === "timetable" && dispatch(deleteTimetable(id));
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
            : data?.name}
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
                : name === "timetable" && tLoading
            }
            onClick={() => handleDelete(data.id)}
          >
            {name === "department"
              ? "Delete Department"
              : name === "faculty"
              ? "Delete Faculty"
              : name === "timetable" && "Delete Timetable Entry"}
          </Button>
        </div>
      </div>
    </DialogContainer>
  );
};

export default DeleteModal;
