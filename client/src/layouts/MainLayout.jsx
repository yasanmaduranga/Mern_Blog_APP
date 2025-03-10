import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className='px-2 md:px-4 lg:px-8 lx:px-16 2xl:px-32'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout;