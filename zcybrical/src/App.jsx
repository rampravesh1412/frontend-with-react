import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Navbar/>
     <Outlet/>
      <Footer/>

    </>
  )
}

export default App;
