import React from 'react'
import Header from './Header';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
