import DialogContainer from '../../ui/modals/Dialog'
import { Form, Formik } from 'formik'
import CustomInput from '../../FormElements/CustomInput'
import CustomPassword from '../../FormElements/CustomPassword'

import { addStaff } from '../../../utils/schema'
import Button from '../../ui/buttons/Button'

import { useDispatch, useSelector } from 'react-redux'
import { editUser, registerState, registerUser } from '../../../features/slices/admin/registerSlice'

const AddStaffModal = ({ open, setOpen, data }) => {
    const {loading} = useSelector(registerState)
    const dispatch = useDispatch()

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <Formik
                        initialValues={{
                            fullname: data?.fullname || '',
                            email: data?.email || '',
                            username: data?.username || '',
                            password: data?.password || '',
                        }}
                        validationSchema={addStaff}
                        onSubmit={async (values, actions) => {
                            if(data) {
                                const { id } = data
                                dispatch(editUser({id, values}))
                            } else {
                                dispatch(registerUser(values))
                            }
                            closeDialog()

                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Full Name" name="fullname" type="text" placeholder="Dominic Praise" />

                                    <CustomInput label="Email Address" name="email" type="email" placeholder="Enter email address" />

                                </div>
                                 <CustomInput label="Username" name="username" type="text" placeholder="Enter Username" />

                               {!data && <CustomPassword label="Password" name="password" placeholder="Enter Password" />}

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