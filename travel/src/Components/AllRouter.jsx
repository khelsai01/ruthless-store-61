import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Desination from "../pages/Desination"
import Blogs from "../pages/Blogs"
import Abouts from "../pages/Abouts"
import Contacts from "../pages/Contact"
import {Login} from "../pages/Login"
import Cart from '../pages/Card'
import DestinationSingle from '../pages/DestinationSingle'
import SignUp from '../pages/SignUp'




const AllRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/destination" element={<Desination />} />
    <Route path="/destination/:id" element={<DestinationSingle />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/about" element={<Abouts />} />
    <Route path="/contact" element={<Contacts />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path='/cart' element={<Cart />} /> */}

   </Routes>
  )
}

export {AllRouter}