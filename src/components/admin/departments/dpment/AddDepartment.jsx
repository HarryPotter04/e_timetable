import DialogContainer from "../../../ui/modals/Dialog";
import { Form, Formik } from "formik";
import CustomInput from "../../../FormElements/CustomInput";
import { addDepartment } from "../../../../utils/schema";
import Button from "../../../ui/buttons/Button";
import CustomSelect from "../../../FormElements/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { facultyState } from "../../../../features/slices/timetable/facultySlice";
import {
  createDepartment,
  editDepartment,
} from "../../../../features/slices/timetable/departmentSlice";

const AddDepartment = ({ open, setOpen, data }) => {
  const { loading, facultys } = useSelector(facultyState);

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
              faculty: data?.faculty.name || "",
            }}
            validationSchema={addDepartment}
            onSubmit={async (values, actions) => {
              if (data) {
                const { id } = data;
                dispatch(editDepartment({ id, values }));
              } else {
                dispatch(createDepartment(values));
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
                  placeholder="Computer science"
                />
                <CustomSelect label="Faculty" name="faculty">
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
                    Add Department
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

export default AddDepartment;
