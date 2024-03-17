import React , {useState} from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
   
    
    <div className='navbar-container'>
      <div>
        <ul className='flex justify-evenly flex-wrap '>
            <li className='logo'><img src={logo} alt="logo" /></li>
            <li className='text-green-700 list'>
                <select defaultValue="option1">
                    <option value="option1"   selected  >Home</option>
                   
                </select>
            </li>
            <li className='list'>
                <select defaultValue="option1">
                    <option value="option1"  >Technologies</option>
                </select>
            </li>
            <li className='list'>Work</li>
            <li className='list'>
                <select defaultValue="option1">
                <option value="option1"  >Company</option>
                </select>
            </li>
            <li className='list'>Hire Developer</li>
            <li >
                <button className='btn text-white px-4 py-2 rounded font-semibold text-lg'>Start a Project</button>
            </li>
        </ul>
      </div>
    </div>
        
  )
}

export default Navbar