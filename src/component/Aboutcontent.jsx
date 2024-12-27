import React from 'react'
import './Aboutstyle.css'
import Martabak from '../assets/Martabak-12.jpeg'

function Aboutcontent() {
  return (
    <div className='aboutt'>
        <div className='container-about'>
        <div className='about-img'>
            <img src={Martabak} alt="" className='martabak' />
        </div>
        <div className='about-content'>
            <h1>Martabak 89 Premiere</h1>
            <p>Di balik setiap bisnis yang sukses terdapat kisah inspiratif yang membangunnya.<br />Begitu pula dengan Martabak Premier 89,<br /> sebuah warung martabak kecil yang telah menjadi ikon kuliner di sudut kota. <br />Mari kita jelajahi kisah perjalanan mereka yang menarik.</p>
        </div>   
        </div>
    <div className='container-2'>
        <div className='left'>
            <h5>Our Story</h5>
            <h1>Journey To Become Best Martabak In Town</h1>
            
        </div>

        <div className='right'>
        <p>Dimulai dari sebuah impian sederhana di sebuah dapur kecil, kami bertekad untuk menghasilkan martabak yang luar biasa. <br />Dengan setiap gigitan, kami memperbaiki resep dan teknik kami,<br /> berkomitmen untuk menyajikan yang terbaik.</p>
        <p>Melalui kerja keras dan dedikasi, martabak kami mulai dikenal di seluruh kota. <br/>Kata demi kata, kami dikenal sebagai tujuan utama bagi para pencinta martabak.</p>
        <p>Dalam perjalanan kami, kami belajar, tumbuh, dan bersyukur atas dukungan yang tak terhitung jumlahnya dari para pelanggan kami. <br />Dengan penuh semangat, kami melanjutkan perjalanan kami,</p>
        </div>
           

        </div>

    </div>
    
  )
}

export default Aboutcontent
