import React from 'react';
import './Menuconstyle.css'; // Mengimpor file CSS jika diperlukan

import { NavLink } from 'react-router-dom';


function Menucon(props) {
  return (
    <div className='menu-card'>
    <img src={props.imgsrc} alt="konyol" />
    <h2 className='menu-title'>{props.title}</h2>
    <div className='menu-details'>
        <p>{props.text}</p>
    
    </div>
    <div className='pro-btns'>
            <NavLink to={props.view} ><button className='btn' >LinkTree</button></NavLink>

            <NavLink to={props.menu} ><button className='btn'>Menu</button></NavLink>
        </div>

        </div>

        


   
  );
}

export default Menucon;
