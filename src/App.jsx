import { useState } from 'react'

import './App.css'
import Contactus from './pages/Contactus'
import About from './pages/About'
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Admission from './pages/Admission'
import Result from './pages/Result'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Academics from './pages/Academics'
import Footer from './components/Footer'
import Error from './components/Error'
import StudentLogin from './pages/StudentLogin'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'




function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/results' element={<Result/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/results/student-login" element={<StudentLogin/>} />
        <Route path="/results/admin-login" element={<AdminLogin/>}/>
         <Route path="/results/admin" element={<AdminDashboard   />} />

      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
