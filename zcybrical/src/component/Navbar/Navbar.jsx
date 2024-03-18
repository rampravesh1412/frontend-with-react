import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import Company from './../Company/Company';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (


    <>
      {/* mobile view navbar */}
      <div className="responsive-menu ">
        <div className='flex justify-between'>
          <div className='img-header-dd'>
           <img src={logo} alt="logo"  className='h-8 pt-2'/>
          </div>
          <div>
            <button onClick={toggleMenu} className="menu-button">
              <IoMenu className='text-3xl text-black' />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="menu-items bg-slate-600 text-white">
            {/* Your menu items go here */}
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/">HOME</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/technologies">Technologies</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/work">Work</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/company">
                Company
              </Link>
            </span>

            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/hiredeveloper">
                Hire Developer
              </Link>
            </span>
          </div>
        )}
      </div>




      {/* destop view view navbar */}


      <div className='navbar-container destop-view'>

        <div>
          <ul className='flex justify-evenly flex-wrap '>
            <li className='logo'><img src={logo} alt="logo" /></li>
            <li className='text-green-700 list'>
              <Link to="/">Home</Link>
            </li>
            <li className='list'>
              <Link to="/technologies">Technologies</Link>
            </li>
            <li className='list'>
              <Link to="/work">Work</Link>
            </li>
            <li className='list'>
              <Link to="/company">Company</Link>
            </li>
            <li className='list'>
              <Link to="/hiredeveloper">Hire Developer</Link>
            </li>
            <li >
              <button className='btn text-white px-4 py-2 rounded font-semibold text-lg'>Start a Project</button>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Navbar