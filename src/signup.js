import React,{useState,useRef,} from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";
import './signup.css'
import { doc, setDoc } from "firebase/firestore"; 
import {projectfirestore, projectstorage} from './firebase.js'


function Signup() {
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null)
  const [data, setdata] = useState({
    email:'',
    password:''
  });

 const {email,password} = data
 const handlechange = (e)=>{
   setdata({...data, [e.target.name]: e.target.value})
 }
  const  signup = async (e)=>{
    e.preventDefault();
    setLoading(true)

    if(email === "" || password === ""){
      seterror("Fields are empty")
    
  
      setLoading(false)
    }
    else if(password.length < 6){
      seterror("Password characters must be greater than 6")
      setLoading(false)
    }
   else{
    try{
      await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
        console.log(response.user.refreshToken)
        localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        
      });
      await setDoc(doc(projectfirestore, "images", `${email}`), {
        saveImages:[]
      })
     setLoading(false)
     setsuccess("Your Account is created successfully")
     setdata({
       email:'',
       password: ''
     });
     history.replace("/login");
   }
   catch(err){
   seterror(err.message)
   console.log(err)
   setLoading(false)
   }
   }
    
 
  

  }
 
  return (
    <div className='form'>
          <div style={{color:'white',background:'orangered',borderRadius:'50%',width:'100px',height:'100px', margin:'auto', marginTop:'100px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}> 
          <span style={{textAlign:'center',fontSize:'25px'}}>SOI</span> </div><br/>

          <div><h2 className='text-sm'>Create an Account</h2>
          <p className='text-sm'>Please create an account to continue</p>
          </div>
        <form onSubmit={signup}>
            <div>
                <input type="email" placeholder='Email' value={email} onChange={handlechange} name='email' style={{border:'1px solid black'}}/>
            </div>
            <div>
                <input type="password" placeholder='Password' value={password} onChange={handlechange} name='password' style={{border:'1px solid black'}}/>
            </div><br/>
            <div>
              <button type="submit" className="" style={{color:'white',background:'orangered',borderRadius:'20px'}}>{loading ? "CREATING...." :"SIGN UP"}</button>

            </div>
            <div>
              {error?(<div className="bg-red-400 text-white p-3 mt-3"><p>{error}</p></div>):''}
              {success ? <p>{success}</p>: ''}
            </div><br/>
            <div className='text-sm'>Already have an account ? <Link to="login" style={{color:'black',textDecoration:'none'}}>Sign in</Link></div>
        </form><br/><br/>
        </div>
  )
}

export default Signup