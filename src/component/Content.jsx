import React from 'react'
import './Contentstyle.css'
import Background from '../assets/Hello.jpg'
import Markicob from '../assets/Martabak-27.jpeg'
import { Link } from 'react-router-dom'

function Content(){
  return (
    <div className='content'>
        <div className='mask'>
        <img src={Background} className='into-img' />
        </div>
       <div className='kotak'>
          <div className='content-box'>
            <h1 className='home-h1'>Best Martabak In Town</h1>
            <h2><span>Martabak Premier 89</span></h2>
            <p>Martabak 89 Premiere, di mana kelezatan bertemu dengan kualitas terbaik.</p>
             <Link to="/menu">
             <button type="button" className="home-btn">Learn More</button>
             </Link>
            
          </div>
       <div className='img-box'>
            <img src={Markicob} alt="" className='gambar'/>
       </div>
      
       </div>
      
    </div>
  )
}

export default Content
