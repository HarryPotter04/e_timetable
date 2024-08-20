import DialogContainer from "../../ui/modals/Dialog";
import { Form, Formik } from "formik";
import CustomInput from "../../FormElements/CustomInput";
import Button from "../../ui/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createLevel,
  levelState,
} from "../../../features/slices/timetable/levelSlice";

const AddLevel = ({ open, setOpen }) => {
  const { loading } = useSelector(levelState);
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
              name: "",
            }}
            onSubmit={async (values, actions) => {
              dispatch(createLevel(values));
            }}
          >
            {(props) => (
              <Form autoComplete="off">
                <CustomInput
                  label="Level"
                  name="name"
                  type="text"
                  placeholder="ND 1"
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
                    Add Level
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

export default AddLevel;
