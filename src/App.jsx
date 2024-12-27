import React, { useContext } from 'react'
import './index.css'
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { AuthContext } from './Context/AuthContext';



function App(){
    const {currentUser}= useContext(AuthContext)
    const RequireAuth=({children})=>{
      return currentUser ? (children) : <Navigate to="/login"/>
    }
    return(
        <>
        <Routes>
          <Route path='/'element={<Navigate to='/Login'/>}/>
        <Route path="/login"element={<Login />}/>
        <Route path="/home" element={<Home />}/> 
        <Route path="/menu" element={<Menu />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="/contact" element={<Contact />}/>
      
        </Routes>

        </>
    );
}

export default App