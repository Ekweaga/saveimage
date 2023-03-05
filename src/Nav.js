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
const token = JSON.parse(localStorage.getItem('token'))

  useEffect(()=>{
    const changewidth = ()=>{
      if(typeof window !== "undefined"){
       
          setscreenwidth(window.innerWidth)
        }
      
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
    <nav className='relative  lg:mx-auto py-3 md:py-6 shadow px-6 '>
    <div className="flex items-center justify-between">
      <div className="">
        <div className=" rounded-full p-3 ImgIcon">
          <h2>SOI</h2>
        </div>
      </div>
      <div>
        <div className="hidden md:flex space-x-6 ">
          <Link to="" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <FcHome/> Home</Link>
          <Link to="about" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2">About Us</Link>
          <Link to="library" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <MdPhotoLibrary/> Library</Link>
          <Link to="upload" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <BsUpload/> Create</Link>
         
        
        </div>
      </div>
    
      <Link to="" className="navBtn shadow hidden md:block">{token?<span onClick={logout}>Logout</span>:<span><Link to="login">Login</Link></span>}</Link>
     
      <div className='menubar'>
         {close &&(<button className='ham' onClick={tooglenav} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}><img src={openimg} style={{width:'20px',height:'20px',cursor:'pointer' }} alt="img"/></button>)}  
        {open &&(<button className='close' onClick={toogleclose} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}> <img src={closeimg} style={{width:'20px',height:'20px',cursor:'pointer'}} alt="imgs"/></button>)} 
         </div>
    </div>

    <div className={close ? 'responsive':'open'} style={{zIndex:333}}>
        <div className="flex flex-col items-center justify-center gap-[20px] space-x-6 mt-[50px] ">
          <Link to="" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <FcHome/> Home</Link>
          <Link to="library" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <MdPhotoLibrary/> Library</Link>
          <Link to="upload" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2"> <BsUpload/> Create</Link>
          <Link to="about" className="hover:text-orange-100 flex flex-row items-center justify-center gap-2">About Us</Link>
          <Link to="" className="bg-red-600 text-white shadow rounded w-[150px] h-[30px] p-2 flex items-center justify-center ml-[250px] resBtn">{token?<span onClick={logout}>Logout</span>:<span><Link to="login">Login</Link></span>}</Link>
        
        </div>
      </div>
    
     
   </nav>
  )
}

export default Nav
