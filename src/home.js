import React from 'react';
import savelogo from './images/logo.svg'
import logo from './images/illustration-intro.svg'
import logo1 from './images/bg-simplify-section-desktop.svg'
import logo2 from './images/bg-tablet-pattern.svg';
import logo3 from './images/bg-simplify-section-mobile.svg';
import p1 from './images/avatar-ali.png'
import p2 from './images/avatar-anisha.png'
import p3 from './images/avatar-richard.png'
import p4 from './images/avatar-shanai.png'


import man1 from './images/man1.jpeg'
import man2 from './images/man2.jpeg'
import man3 from './images/man3.jpeg'
import man4 from './images/man4.jpeg'
import man5 from './images/man5.jpeg'
import {MdPhotoLibrary} from 'react-icons/md'
import {FcHome,FcAbout,FcMenu} from 'react-icons/fc'
import {BsUpload} from 'react-icons/bs'
import intro from './images/illustration-stay-productive.png'
import './home.css'
import Footer from "./Footer"


import {Link} from 'react-router-dom'
import Nav from './Nav';

const Home = () => {
  return (
 <> 
 <Nav/>
 
 <br/><br/>

   <div className="hero m-0 md:m-10">
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-center px-6 mx-auto  space-y-0 md:space-y-0">
      <div className="heroLeft flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="text-3xl font-bold text-center md:text-4xl md:text-left max-w-md mt-4">
          Bring your images together for faster access
        </h1>
        <p className='max-w-md text-justify ml-0 md:-ml-[3px] md:text-left'>SaveOurImage makes it easy and simpler for users to save and be able to access images on our platform</p>
        <div className="flex justify-center md:justify-start">
          <button>Get Started</button>
        </div>
      </div>

      <div className="heroImg w-full md:w-1/2">
        <img src={intro} />


      </div>

    </div>

   </div>

   <div className="features">

    <div className="flex flex-col md:flex-row items-center  px-6 mx-auto mt-3 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
      <h1 className="text-3xl  text-center md:text-3xl md:text-left max-w-md">
        What Different about SaveOurImage
        </h1>
        <p className='max-w-md text-justify ml-0 md:ml-4 md:text-left'>SaveOurImage provides all functionality users need to save, manage and access images easily on our platform</p>
       
      </div>
      <div className="adv flex flex-col">
        <div className="flex flex-col md:flex-row m-10">
          <section className="rounded-full mx-auto md:mx-0">01</section>
          <div><h3 className="font-bold mb-3">User Authentication</h3>
          <p>Users are authenticated to access their images</p></div>
          

        </div>

        <div className="flex flex-col md:flex-row m-10">
          <section className="rounded-full mx-auto md:mx-0">02</section>
          <div><h3 className="font-bold mb-3">Advanced storage system</h3>
          <p>We use latest storage facility to store images</p></div>
          

        </div>

        <div className="flex flex-col md:flex-row m-10">
          <section className="rounded-full mx-auto md:mx-0">03</section>
          <div><h3 className="font-bold mb-3">Scalable storage capacity</h3>
          <p>Storage system scale-up has images uploads increases</p></div>
          

        </div>

        <div className="flex flex-col md:flex-row m-10">
          <section className="rounded-full mx-auto md:mx-0">04</section>
          <div><h3 className="font-bold mb-3">Secure Users Images</h3>
          <p>Each user image can only be seen and access by that user</p></div>
          

        </div>

       

      </div>

    </div>

   </div>

   <div>
      <h2 className="font-bold text-3xl m-5">What they say</h2>
    </div>

   <div className="testimonials mx-auto flex flex-row items-center justify-center p-3">
   
    <div className="flex flex-col md:flex-row items-center  px-6 mx-auto mt-3 space-y-0 md:space-y-0 gap-4 ">
      <div className="flex flex-col items-center justify-center  p-4 w-50">
        <img src={p1}/>
        <div>  <h4 className="font-bold">Shanai</h4>
        <p className="text-sm">Wow, I have be able to save all images from my phone to SaveOurImage. Bravo!!</p>
        </div>
      
      </div>
      <div className="flex flex-col items-center justify-center  p-4 w-50"> <img src={man1}/>
      <div><h4 className="font-bold">Richard</h4>
      <p className="text-sm">
        Thumbs uo for large storage capacity. I was able to store all.</p></div>
      </div>
      <div className="flex flex-col items-center justify-center p-4"> <img src={p2}/>
      <div><h4 className="font-bold">Anisha</h4>
      <p className="text-sm">I have been using this platform for awhile now. It's really the best</p></div></div>
      <div className="flex flex-col items-center justify-center  p-4"> <img src={man3}/>
      <div>
        <h4 className="font-bold">Ali</h4>
        <p className="text-sm">Good platform wonderfully made</p></div></div>

    </div>
   </div>
   <div className="m-10">
    <button className="w-[250px] shadow" ><Link to="signup">Create Account</Link></button>
   </div>

   <div className="start flex flex-col md:flex-row items-center justify-around gap-5 p-[20px]">
    <section><p className="font-bold">Save yourselves some space with SaveOurImage</p></section>
    <div><button><Link to="login">Get Started </Link></button></div>
   </div>
     <Footer />

   </>
  )
} 

export default Home