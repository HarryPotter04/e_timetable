import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import AuthLayout from './utils/AuthLayout';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import { Toaster } from 'react-hot-toast';
import './assets/css/style.css'
import ManageTimeTable from './pages/admin/ManageTimeTable';
import ManageDepartment from './pages/admin/ManageDepartment';
import ManageStaff from './pages/admin/Staffs';

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<AuthLayout />}>

          {/* AUTHENTICATIONS */}
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />

          {/* ADMIN ROUTES */}
          <Route element={<ProtectedRoute />}>

            <Route path="admin/dashboard">

              <Route path="" element={<AdminDashboard />} />
              <Route path="timetable" element={<ManageTimeTable />} />
              <Route path="departments" element={<ManageDepartment />} />
              <Route path="staffs" element={<ManageStaff />} />

            </Route>

          </Route>

        </Route>

        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Toaster position="top-center" reverseOrder={false} />

    </>
  );
};

export default App;
