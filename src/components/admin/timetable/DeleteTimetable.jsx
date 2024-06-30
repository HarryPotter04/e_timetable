import DialogContainer from "../../ui/modals/Dialog";
import Button from "../../ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTimetable, timetableState } from "../../../features/slices/timetable/timetableSlice";

const DeleteTimetable = ({ data, openDel, setOpenDel }) => {
  const { loading } = useSelector(timetableState);

  const dispatch = useDispatch()

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
          Are you sure you want to delete "{data?.course}" on {data?.day?.name}
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
          loading={loading}
          onClick={() => dispatch(deleteTimetable(data.id))}
        >
          Delete Timetable Entry
        </Button>
        </div>
      </div>
    </DialogContainer>
  );
};

export default DeleteTimetable;
