import React from 'react'
import img1 from './images/icon-facebook.svg'
import img2 from './images/icon-instagram.svg'
import img3 from './images/icon-twitter.svg'
import img4 from './images/icon-youtube.svg'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-black h-500 w-full flex flex-col-reverse md:flex-row text-white justify-around p-5 gap-5 md:gap-0">
        <div>
        <div className=" rounded-full p-3 ImgIcon mx-auto " style={{width:'50px',height:'50px'}}>
          <h2>SOI</h2>
        </div>
        <div className="socialIcons flex flex-row gap-3 items-center justify-center mt-5">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>

        </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-3'>
        <Link to="" className="hover:text-orange-100">Home</Link>
          <Link to="library" className="text-sm">Library</Link>
          <Link to="upload" className="text-sm">Create</Link>
          <Link to="" className="text-sm">Blog</Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
        <Link to="signup" className="hover:text-orange-100">Create account</Link>
          <Link to="about" className="text-sm">About Us</Link>
         
        </div>
        <div className="hidden md:block">
            <input type="email" placeholder="Email" style={{background:'white',border:'1px solid white',borderRadius:'20px',padding:'5px'}} className="focus:outline-none focus:border-none text-black"/> <button style={{width:'100px'}}>Go</button>
        </div>
      
    </footer>
  )
}

export default Footer
