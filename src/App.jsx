import { useState } from 'react'

import './App.css'
import Contactus from './pages/Contactus'
import About from './pages/About'
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Admission from './pages/Admission'
import Gallery from './pages/Gallery'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'



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
        <Route path='/gallery' element={<Gallery/>}/>

      </Routes>
      
    </div>
  )
}

export default App
