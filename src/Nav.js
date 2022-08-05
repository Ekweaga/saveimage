import React from 'react'
import './styles.css';
import closeimg from './icon-close.svg';
import { useState,useEffect } from 'react';
import openimg from './icon-hamburger.svg'
import {Link,useHistory} from "react-router-dom"
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
import {MdPhotoLibrary} from 'react-icons/md'
import {FcHome,FcAbout,FcMenu} from 'react-icons/fc'
import {BsUpload} from 'react-icons/bs'

function Nav() {
  const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth)
  const history = useHistory();
  
  const tooglenav=()=>{
    settoogle(true)
    setclose(false)
    setopen(true)
   
  }
  
  const toogleclose = ()=>{
    settoogle(false);
    setclose(true)
    setopen(false)
  }
  const logout = async ()=>{
    await signOut(auth)
    history.replace("/login");
    localStorage.clear();
}


  useEffect(()=>{
    const changewidth = ()=>{
      if(typeof window !== "undefined"){
       
          setscreenwidth(window.innerWidth)
        }
      
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
    <div className='headers'> 
      <div className='header-logo'>
          SOI
      </div>
      <div className='header-menu' style={{backgroundColor:toggle ? "orangered": null}}>
      {(toggle || screenwidth > 500) && (
      <ul style={{display:'flex'}}>
             
              <li onClick={()=>history.replace('/library')}> <MdPhotoLibrary/> Library</li>
              <li onClick={()=>history.replace('/')}><FcHome/> Home</li>
              <li onClick={()=>history.replace('/upload')}> <BsUpload/> Add</li>
              <li onClick={logout}><button style={{background:'white',border:'orangered',padding:'10px',color:'black'}}>logout</button></li>
             
             
           
          </ul>) }
         <div className='menubar'>
         {close &&(<button className='ham' onClick={tooglenav} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}><img src={openimg} style={{width:'20px',height:'20px',cursor:'pointer' }} alt="img"/></button>)}  
        {open &&(<button className='close' onClick={toogleclose} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}> <img src={closeimg} style={{width:'20px',height:'20px',cursor:'pointer'}} alt="imgs"/></button>)} 
         </div>
         
      </div>
    </div>
  )
}

export default Nav
