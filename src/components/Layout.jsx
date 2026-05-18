import React from 'react'
import Header from './Header';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Navber/>
      <Outlet/>
    </div>
  )
}

export default Layout
