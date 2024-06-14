import React from 'react';
import { useField } from 'formik';

function CustomSelect({ label, className, formGroupClass, ...props }) {
  
  const [field, meta] = useField(props);

  return (
    <div className={`form-group ${formGroupClass || 'mb-3.5'} `}>
      <label className="form-label text-xs mb-1"> {label} </label>
      <select {...field} {...props} className={`form-control ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`} />
      {meta.touched && meta.error ? (
        <div className="text-red-600 text-xs font-light mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default CustomSelect;
