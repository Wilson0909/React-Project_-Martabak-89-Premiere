import React from 'react'
import { useState } from 'react';
import './Navbarstyle.css'
import { Link } from 'react-router-dom'
import Martabak from '../assets/Martabak.png'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick]= useState(false);
    function handleClick(){
        setClick(!click);
    }

  return (
   
        <div className='header'>
        <img src={Martabak} alt="" />
        <ul className={click ? "nav-menu active" :"nav-menu" }>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/menu"}>Menu</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                     
            </ul>
            <div className='burger' onClick={handleClick}>  
            {click ? (<FaBars size={20} style={{ color:"#fff" }} />):(  <FaTimes size={20} style={{ color:"#fff" }} />)}
            
          
         </div>
         </div>
   
    
  )
}

export default Navbar
