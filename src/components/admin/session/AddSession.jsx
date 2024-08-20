
import DialogContainer from '../../ui/modals/Dialog'
import { Form, Formik } from 'formik'
import CustomInput from '../../FormElements/CustomInput'
import Button from '../../ui/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { createSession, sessionState } from '../../../features/slices/timetable/sessionSlice'

const AddSession = ({ open, setOpen }) => {

    const { loading } = useSelector(sessionState)
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
                            years_name: '',
                        }}
                        onSubmit={async (values, actions) => {
                            dispatch(createSession(values))
                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="Session" name="years_name" type="text" placeholder="2023/2024" />

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
                                        Add Session
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

export default AddSession
