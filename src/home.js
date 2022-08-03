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
import img1 from './images/icon-facebook.svg'
import img2 from './images/icon-instagram.svg'
import img3 from './images/icon-twitter.svg'
import img4 from './images/icon-youtube.svg'
import man1 from './images/man1.jpeg'
import man2 from './images/man2.jpeg'
import man3 from './images/man3.jpeg'
import man4 from './images/man4.jpeg'
import man5 from './images/man5.jpeg'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
       { /*<div style={{color:'white', margin:'25px', background:'orangered',borderRadius:'50%',width:'40px',height:'40px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> <span style={{textAlign:'center'}}>SOI</span> 
        </div>*/}
       
      <div className='header'>
        <div className='bring'>
          <h1>
            Bring your Images together for better Access
          </h1>
          <p>SaveOurImage makes it easy and simpler for users to save and be able to access images on cloud</p>
          <div>
          <Link to="signup">  <button style={{background:'orangered',color:'white',padding:'10px',border:'none',width:'150px',borderRadius:'10px'}}>Get started</button></Link>
          </div>
          
        </div>
       
      
      </div>
      
      <div className='body'>
        <div className='adv'> 
           <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}> <h1>
              What Different about SaveOurImage?
            </h1>
          
            <p> SaveOurImage provides all functionality user need to save, manage and access image easily on our cloud
               system</p></div>
              { <div className='advimg'>  <img src={logo2}/></div>}
          
        </div>
        <div className='diff'>
          <div>
           <div><span>01</span><br/><br/><b>User Authentication</b>
           <p>Users are Authenticated to access thier images</p>
           
           </div> 
          
          </div>
          <div>
           <div><span>02</span><br/><br/><b>Advanced image storage system</b>
           <p>We use large and scalable storage facility to store images</p>
           </div> 
          </div>
          <div>
            <div><span>03</span><br/><br/><b>Scalable storage capacity</b></div>
           <div><p>Storage system used will scale-up has images uploads increases</p></div> 
          </div>
          <div>
            <span>04</span><br/><br/><b>Secure Users Images</b>
            <p>Each User image can only be seen and access by that user</p>
          </div>

        </div>

      </div>
      <div><h1>
        What they've said</h1></div>
      <div className='test'>
        <div>
              <img src={p1}/>
              <h3>Ali</h3>
              <p>Wow, I have be able to save all my iages from my phone to SaveOurImage. Easily accessible, Kudos</p>
        </div>
        <div>
        <img src={p2}/>
        <h3>Anisha</h3>
        <p>I have been using this platform for a while now and I tell you, its really the best</p>
        </div>
        <div>    <img src={p3}/>  
         <h3>Richard</h3>
         <p>SOI, i give them thumbs up for large storage capacity!!!. I was able to store all my images as bulky as they were</p>
        </div>
        <div>    <img src={p4}/>  
         <h3>Shanai</h3>
         <p>Wow, I have be able to save all my iages from my phone to SaveOurImage. Easily accessible, Kudos</p>
         </div>
      </div>
      <div>
      <Link to="signup">  <button  style={{color:'white',background:'orangered',border:'none',margin:'20px',width:'250px',borderRadius:'20px',padding:'10px'}}>Create an account</button></Link>
      </div>

      <div className='bottom'>
<div style={{color:'white',margin:'20px',width:'350px'}}>
  <h2 style={{fontSize:'15px'}}>Save yourself some space with SaveOurImage</h2>
</div>
<div className='btn'>
  <button style={{color:'orangered',background:'white',border:'none',margin:'20px',width:'200px',borderRadius:'20px',padding:'8px'}}>
    Get Started
  </button>
</div>
      </div>

      <div className='footer'>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
             <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'40px',height:'40px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> <span style={{textAlign:'center'}}>SOI</span> </div>
              <div style={{margin:'20px'}}>
                <img src={img1}/>&nbsp;
                <img src={img2}/>&nbsp;
                <img src={img3}/>&nbsp;
                <img src={img4}/>

              </div>
            </div>
            <div>
                  <ul>
                    <li>Home</li>
                    <li>SaveImage</li>
                    <li>About Us</li>
                    <li>Create Account</li>
                  </ul>
            </div>
            <div>
            <ul>
                    <li>Careers</li>
                    <li>Policy</li>
                    <li>Community</li>
                  </ul>
            </div>
            <div>
              <input type='email' placeholder='Updates in your inbox'/><button  style={{color:'orangered',background:'white',border:'none',width:'50px',borderRadius:'20px',padding:'8px'}}>Go</button>
            </div>
      </div>
      

    </div>
  )
}

export default Home