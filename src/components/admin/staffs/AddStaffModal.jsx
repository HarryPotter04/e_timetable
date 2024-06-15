import DialogContainer from '../../ui/modals/Dialog'
import { Form, Formik } from 'formik'
import CustomInput from '../../FormElements/CustomInput'
import CustomPassword from '../../FormElements/CustomPassword'
import { useState } from 'react'
import { addStaff } from '../../../utils/schema'
import Button from '../../ui/buttons/Button'
import CustomSelect from '../../FormElements/CustomSelect'

const AddStaffModal = ({ open, setOpen }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            role: '',
                            password: '',
                        }}
                        validationSchema={addStaff}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            setTimeout(() => {
                                setLoading(false)
                            }, 500);

                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Full Name" name="name" type="text" placeholder="Dominic Praise" />

                                    <CustomInput label="Email Address" name="email" type="email" placeholder="Enter email address" />

                                </div>

                                <CustomSelect label="Role" name="role">
                                    <option value="" disabled selected> Select Role </option>
                                    <option value="admin">Admin</option>
                                </CustomSelect>

                                <CustomPassword label="Password" name="password" placeholder="Enter Password" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">

                                    <Button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        color="text-primary font-medium"
                                        className=" py-3 w-full order-2 sm:order-1"
                                    >
                                        Cancel
                                    </Button>

                                    <Button type="submit"
                                        color="btn-primary"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}>
                                        Add Staff
                                    </Button>

                                </div>

                            </Form>

                        )}

                    </Formik>

                </div>

            </DialogContainer>

        </>
    )
}

export default AddStaffModal