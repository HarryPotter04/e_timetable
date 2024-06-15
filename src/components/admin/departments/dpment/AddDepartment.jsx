import DialogContainer from '../../../ui/modals/Dialog'
import { Form, Formik } from 'formik'
import CustomInput from '../../../FormElements/CustomInput'
import { useState } from 'react'
import { addDepartment } from '../../../../utils/schema'
import Button from '../../../ui/buttons/Button'
import CustomSelect from '../../../FormElements/CustomSelect'

const AddDepartment = ({ open, setOpen }) => {

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
                            faculty: ''
                        }}
                        validationSchema={addDepartment}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            setTimeout(() => {
                                setLoading(false)
                            }, 500);

                        }}
                    >

                        {(props) => (

                            <Form autoComplete='off'>

                                <CustomInput label="Full Name" name="name" type="text" placeholder="Computer science" />

                                <CustomSelect label="Faculty" name="faculty">
                                    <option value="" disabled selected> Select Faculty </option>
                                    <option value="spas">Spas</option>
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

                                    <Button type="submit"
                                        color="btn-primary"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}>
                                        Add Department
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

export default AddDepartment