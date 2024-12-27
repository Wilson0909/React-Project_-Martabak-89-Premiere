import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Form from './component/Form'
import { AuthContext } from './Context/AuthContext'

function Contact() {
 
 
  return (

    <div>
        <Navbar />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact
