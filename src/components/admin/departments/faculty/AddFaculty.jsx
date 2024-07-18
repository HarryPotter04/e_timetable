import DialogContainer from "../../../ui/modals/Dialog";
import { Form, Formik } from "formik";
import CustomInput from "../../../FormElements/CustomInput";
import { addFaulty } from "../../../../utils/schema";
import Button from "../../../ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createFaculty,
  editFaculty,
  facultyState,
} from "../../../../features/slices/timetable/facultySlice";

const AddFaculty = ({ open, setOpen, data }) => {
  const { loading } = useSelector(facultyState);

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
              name: data?.name || "",
              acronym: data?.acronym || "",
            }}
            validationSchema={addFaulty}
            onSubmit={async (values, actions) => {
              if (data) {
                const { id } = data;
                dispatch(editFaculty({ id, values }));
              } else {
                dispatch(createFaculty(values));
              }
              setOpen(false);
            }}
          >
            {(props) => (
              <Form autoComplete="off">
                <CustomInput
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="School of pure and applied science"
                />

                <CustomInput
                  label="Acronym"
                  name="acronym"
                  type="text"
                  placeholder="SPAS"
                />

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
                    Add Faculty
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

export default AddFaculty;
