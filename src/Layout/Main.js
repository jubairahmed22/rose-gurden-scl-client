import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../CheckOut/Navbar'
import HeaderNav from '../CheckOut/HeaderNav/HeaderNav'



const Main = () => {
  return (
    <div className='h-screen'>
      <HeaderNav></HeaderNav>
      <Navbar ></Navbar>
      <Outlet ></Outlet>
      
    </div>
  )
}

export default Main
