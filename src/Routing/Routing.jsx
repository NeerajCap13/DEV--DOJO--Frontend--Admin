import React from 'react'
import { Route , Routes } from 'react-router-dom'
import AdminLogin from '../Components/AdminLogin/AdminLogin'
import AdminRegister from '../Components/AdminRegister/AdminRegister'
import LandingPage from '../Pages/LandingPage/LandingPage'
import AdminNavBar from "../Components/AdminNavBar/AdminNavBar"



const Routing = () => {
  return (
    <div>
        <AdminNavBar/>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/register" element={<AdminRegister />} />
        </Routes>
    </div>
  )
}

export default Routing