import React from 'react'
import "./Footerstyle.css"
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'


function Footer() {
  return (
    <div className='Footer'>
        <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{ color:"white", marginRight:"2rem" }} />
                    <p>Citra Bakery (Ruko Purimas C No 33)</p>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{ color:"white", marginRight:"2rem" }} />+62 815-3614-4472</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{ color:"white" ,marginRight:"2rem"}} />martabak89premiere@gmail.com</h4>
            </div>
        </div>     
        <div className='right'>
            <h4>About the company</h4>
            <p>Selamat datang di <span> Martabak 89 Premier!</span> Kami adalah Martabak Top 1 di Kota Batam.</p>
            <div className='social'>
                <a href="https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr" target='blank'>
                <FaFacebook size={30} style={{ color:'white',marginRight:"1rem" }} />
                </a>
                <a href="https://www.instagram.com/martabak89premiere?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
                <FaInstagram size={30} style={{ color:'white',marginRight:"1rem" }}/>
                </a>
                <a href="https://x.com/?lang=id" target='blank'>
                <FaTwitter size={30} style={{ color:'white',marginRight:"1rem" }}/>

                </a>
            </div>
        </div>
        </div>
     
      
    </div>
  )
}

export default Footer
