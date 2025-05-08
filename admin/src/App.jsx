import React, { useContext } from 'react';
import Login from './pages/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './context/AdminContext'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import AdminDashboard from './pages/Admin/Dashboard';

const App = () => {
  const { aToken } = useContext(AdminContext)


  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path ='/' element={<></>}/>
          <Route path ='/all-appointment' element={<AllAppointment/>}/>
          <Route path ='/add-doctor' element={<AddDoctor/>}/>
          <Route path ='/doctor-list' element={<DoctorsList/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />





        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
};

export default App;


