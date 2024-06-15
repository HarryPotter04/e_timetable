import React, { useState } from 'react';

const TimeTableSearch = ({ onFormSubmit }) => {
    const initialFormValues = {
        faculty: '',
        department: '',
        semester: '',
        level: '',
        session: '',
    };

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formValues);
    };

    const handleClear = () => {
        onFormSubmit(null);
        setFormValues(initialFormValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 mb-3">
                <select
                    className="form-control py-2"
                    name="faculty"
                    value={formValues.faculty}
                    onChange={handleChange}
                >
                    <option value="">Select Faculty</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Business">Business</option>
                    <option value="Law">Law</option>
                    <option value="Education">Education</option>
                </select>

                <select
                    className="form-control py-2"
                    name="department"
                    value={formValues.department}
                    onChange={handleChange}
                >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="History">History</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Nursing">Nursing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Primary Education">Primary Education</option>
                    <option value="Physics">Physics</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                </select>

                <select
                    className="form-control py-2"
                    name="semester"
                    value={formValues.semester}
                    onChange={handleChange}
                >
                    <option value="">Select Semester</option>
                    <option value="Fall">Fall</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                </select>

                <select
                    className="form-control py-2"
                    name="level"
                    value={formValues.level}
                    onChange={handleChange}
                >
                    <option value="">Select Level</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                </select>

                <select
                    className="form-control py-2"
                    name="session"
                    value={formValues.session}
                    onChange={handleChange}
                >
                    <option value="">Select Session</option>
                    <option value="2023/2024">2023/2024</option>
                    <option value="2022/2023">2022/2023</option>
                    <option value="2021/2022">2021/2022</option>
                </select>

                <div className='flex items-center gap-3'>

                    <button className='btn btn-primary rounded-xl text-xs px-8 text-white py-2' type="submit">Submit</button>

                    <button className='btn bg-danger rounded-xl text-xs px-8 text-white py-2' type="button" onClick={handleClear}>Clear</button>

                </div>

            </form>
        </div>
    );
};

export default TimeTableSearch;
