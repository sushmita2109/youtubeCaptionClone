import React, { useState } from 'react';
import './App.css';
export default function Caption() {
    const [caption,setCaption]=useState("");
    
  return (
      <div className='details'> 
      <div className='header'>
      <small >+ Caption</small>
      <small className='text'>Edit As Text</small>
      </div>
      
      <textarea rows="4" cols="30" placeholder='caption'></textarea>
      <i class="fa fa-trash" aria-hidden="true"></i>
      <div className='time'>
      <input className='start-time' placeholder='start'></input>
      <input className='end-time' placeholder='end'></input>
      </div>
      </div>
  )
}
