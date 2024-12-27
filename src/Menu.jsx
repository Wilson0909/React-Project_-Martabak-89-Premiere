import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Menucon from './component/Menucon'
import PropsMenu from './component/PropsMenu'
import ImageSlider from './component/ImageSlider'

function Menu() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <PropsMenu />
      <Footer />
    </div>
  )
}

export default Menu
