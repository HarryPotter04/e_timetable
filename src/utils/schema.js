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

export const addTimetable = Yup.object({
  faculty: Yup.string().required('Faculty is required'),
  department: Yup.string().required('Field is required'),
  session: Yup.string().required('Field is required'),
  level: Yup.string().required('Level is required'),
  semester: Yup.string().required('Semester is required'),
  day: Yup.string().required('Day is required'),
  course: Yup.string().required('Course is required'),
  course_code: Yup.string().required('Course Code is required'),
  instructor: Yup.string().required('Instructor is required'),
  room: Yup.string().required('Room is required'),
  start_time: Yup.string().required('Start Time is required'),
  end_time: Yup.string().required('End Time is required'),
});

