import React from 'react'
import { Route , Routes } from 'react-router-dom'
import AdminLogin from '../Components/AdminLogin/AdminLogin'
import AdminRegister from '../Components/AdminRegister/AdminRegister'
import LandingPage from '../Pages/LandingPage/LandingPage'
import AdminNavBar from "../Components/AdminNavBar/AdminNavBar"
import ResourcesPage from '../Pages/ResourcesPage/ResourcesPage'
import DashboardFunction from '../Pages/DashboardFunction/DashboardFunction'
import PasswordReset from '../Components/PasswordReset/PasswordReset'




const Routing = () => {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/register" element={<AdminRegister />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route path="/resources" element={<ResourcesPage/>} />
            <Route path="/dashboard" element={<DashboardFunction/>} />
        </Routes>
    </div>
  )
}

export default Routing