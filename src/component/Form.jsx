import './Formstyle.css'
import { useState } from 'react'
import React from 'react'
import { Timestamp, addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db,storage } from "../Firebase";


function Form(){
const[data,setData]=useState({
 
});





const handleInput=(e)=>{
  const id = e.target.id;
  const value= e.target.value;
    
    setData({...data,[id]:value});
    console.log({...data})


};


const handleAdd = async (e)=>{
  e.preventDefault();
  try{



    
   const ref= await addDoc(collection(db, "data"), {
      ...data,

      timeStamp: serverTimestamp(),
    });
    navigate(-1)
} catch(err){
  console.log(err);
  
} 
console.log(data);
}

 

  return (
    <div className='form'>
      <form className='contact-input' onSubmit={handleAdd}>
        <h1 className='contact-h1'>Contact Us</h1>
        <label className='contact-label'>Your Name</label>
        <input className='contant-input' type="text" id='name' placeholder='Username' onChange={handleInput}></input>
        <label className='contact-label'>Email</label>
        <input className='contant-input' type="email" id='email' placeholder='Email' onChange={handleInput}></input>
        <label className='contact-label'>Subject</label>
        <input className='contant-input' type="text" id='subject' placeholder='Message' onChange={handleInput}></input>
        <label className='contact-label'>Message</label>
        <textarea className='contant-input' rows="6" placeholder='Type you message' id='message' onChange={handleInput}/>
        <button  className="contact-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
