import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField, useFormikContext } from 'formik';
import { format, parse } from 'date-fns';

const CustomTimepicker = ({ label, className, formGroupClass, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const handleChange = (val) => {
    const formattedTime = format(val, 'hh:mm aa');
    setFieldValue(field.name, formattedTime);
  };

  return (
    <div className={`form-group ${formGroupClass || 'mb-3.5'} `}>
      <label className="form-label text-xs block mb-1">{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && parse(field.value, 'hh:mm aa', new Date())) || null}
        onChange={handleChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="hh:mm aa"
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`}
      />
         {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-1">{meta.error}</div>
            ) : null}
    </div>
  );
};

export default CustomTimepicker;
