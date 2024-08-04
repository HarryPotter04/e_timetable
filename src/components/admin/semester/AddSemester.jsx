
import DialogContainer from '../../ui/modals/Dialog'
import { Form, Formik } from 'formik'
import CustomInput from '../../FormElements/CustomInput'
import { useState } from 'react'
import Button from '../../ui/buttons/Button'

const AddSemester = ({ open, setOpen }) => {

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
                        }}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            setTimeout(() => {
                                setLoading(false)
                            }, 500);

                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="Semester" name="name" type="text" placeholder="First Semester" />

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
                                        Add Semester
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

export default AddSemester
