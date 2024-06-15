import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

export const addStaff = Yup.object({
  name: Yup.string().required('Name is required'),
  role: Yup.string().required('Role is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const addDepartment = Yup.object({
  name: Yup.string().required('Name is required'),
  faculty: Yup.string().required('Faculty is required'),
});

export const addFaulty = Yup.object({
  name: Yup.string().required('Name is required'),
  acronym: Yup.string().required('Acronym is required'),
});